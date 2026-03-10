import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsm")
export default class BsmController {
  @operation({
    summary: "Get Bsm",
  })
  @get()
  static getBsm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsm",
  })
  @post("{id}")
  static createBsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
