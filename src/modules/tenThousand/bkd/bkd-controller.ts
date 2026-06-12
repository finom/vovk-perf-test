import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkd")
export default class BkdController {
  @operation({
    summary: "Get Bkd",
  })
  @get()
  static getBkd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bkd",
  })
  @post("{id}")
  static createBkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
