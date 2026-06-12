import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmm")
export default class MmmController {
  @operation({
    summary: "Get Mmm",
  })
  @get()
  static getMmm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmm",
  })
  @post("{id}")
  static createMmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
