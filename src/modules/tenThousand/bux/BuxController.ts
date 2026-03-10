import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bux")
export default class BuxController {
  @operation({
    summary: "Get Bux",
  })
  @get()
  static getBux = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bux",
  })
  @post("{id}")
  static createBux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
