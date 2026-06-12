import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cl")
export default class ClController {
  @operation({
    summary: "Get Cl",
  })
  @get()
  static getCl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cl",
  })
  @post("{id}")
  static createCl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
