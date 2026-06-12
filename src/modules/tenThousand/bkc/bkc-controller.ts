import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkc")
export default class BkcController {
  @operation({
    summary: "Get Bkc",
  })
  @get()
  static getBkc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bkc",
  })
  @post("{id}")
  static createBkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
