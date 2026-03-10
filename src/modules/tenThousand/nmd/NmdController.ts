import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmd")
export default class NmdController {
  @operation({
    summary: "Get Nmd",
  })
  @get()
  static getNmd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nmd",
  })
  @post("{id}")
  static createNmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
