import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpe")
export default class BpeController {
  @operation({
    summary: "Get Bpe",
  })
  @get()
  static getBpe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bpe",
  })
  @post("{id}")
  static createBpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
