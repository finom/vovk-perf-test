import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("luw")
export default class LuwController {
  @operation({
    summary: "Get Luw",
  })
  @get()
  static getLuw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Luw",
  })
  @post("{id}")
  static createLuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
