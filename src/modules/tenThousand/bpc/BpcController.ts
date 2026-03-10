import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpc")
export default class BpcController {
  @operation({
    summary: "Get Bpc",
  })
  @get()
  static getBpc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bpc",
  })
  @post("{id}")
  static createBpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
