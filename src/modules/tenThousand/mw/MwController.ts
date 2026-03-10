import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mw")
export default class MwController {
  @operation({
    summary: "Get Mw",
  })
  @get()
  static getMw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mw",
  })
  @post("{id}")
  static createMw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
