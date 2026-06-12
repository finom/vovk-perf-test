import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bni")
export default class BniController {
  @operation({
    summary: "Get Bni",
  })
  @get()
  static getBni = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bni",
  })
  @post("{id}")
  static createBni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
