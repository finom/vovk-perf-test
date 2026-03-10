import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmm")
export default class BmmController {
  @operation({
    summary: "Get Bmm",
  })
  @get()
  static getBmm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bmm",
  })
  @post("{id}")
  static createBmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
