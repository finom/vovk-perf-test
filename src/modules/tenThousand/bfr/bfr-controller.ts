import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfr")
export default class BfrController {
  @operation({
    summary: "Get Bfr",
  })
  @get()
  static getBfr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfr",
  })
  @post("{id}")
  static createBfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
