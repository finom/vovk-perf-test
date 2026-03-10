import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bss")
export default class BssController {
  @operation({
    summary: "Get Bss",
  })
  @get()
  static getBss = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bss",
  })
  @post("{id}")
  static createBss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
