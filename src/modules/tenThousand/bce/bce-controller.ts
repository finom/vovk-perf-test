import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bce")
export default class BceController {
  @operation({
    summary: "Get Bce",
  })
  @get()
  static getBce = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bce",
  })
  @post("{id}")
  static createBce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
