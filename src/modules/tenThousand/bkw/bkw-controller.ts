import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkw")
export default class BkwController {
  @operation({
    summary: "Get Bkw",
  })
  @get()
  static getBkw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bkw",
  })
  @post("{id}")
  static createBkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
