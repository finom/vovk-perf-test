import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bix")
export default class BixController {
  @operation({
    summary: "Get Bix",
  })
  @get()
  static getBix = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bix",
  })
  @post("{id}")
  static createBix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
