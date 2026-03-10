import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfp")
export default class BfpController {
  @operation({
    summary: "Get Bfp",
  })
  @get()
  static getBfp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfp",
  })
  @post("{id}")
  static createBfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
