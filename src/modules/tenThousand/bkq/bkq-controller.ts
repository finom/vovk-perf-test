import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkq")
export default class BkqController {
  @operation({
    summary: "Get Bkq",
  })
  @get()
  static getBkq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bkq",
  })
  @post("{id}")
  static createBkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
