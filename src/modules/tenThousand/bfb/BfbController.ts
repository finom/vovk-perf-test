import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfb")
export default class BfbController {
  @operation({
    summary: "Get Bfb",
  })
  @get()
  static getBfb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfb",
  })
  @post("{id}")
  static createBfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
