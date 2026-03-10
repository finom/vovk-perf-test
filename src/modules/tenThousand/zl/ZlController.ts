import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zl")
export default class ZlController {
  @operation({
    summary: "Get Zl",
  })
  @get()
  static getZl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Zl",
  })
  @post("{id}")
  static createZl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
