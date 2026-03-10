import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkv")
export default class BkvController {
  @operation({
    summary: "Get Bkv",
  })
  @get()
  static getBkv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bkv",
  })
  @post("{id}")
  static createBkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
