import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjs")
export default class BjsController {
  @operation({
    summary: "Get Bjs",
  })
  @get()
  static getBjs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bjs",
  })
  @post("{id}")
  static createBjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
