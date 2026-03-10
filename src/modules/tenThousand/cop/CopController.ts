import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cop")
export default class CopController {
  @operation({
    summary: "Get Cop",
  })
  @get()
  static getCop = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cop",
  })
  @post("{id}")
  static createCop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
