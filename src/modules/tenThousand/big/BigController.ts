import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("big")
export default class BigController {
  @operation({
    summary: "Get Big",
  })
  @get()
  static getBig = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Big",
  })
  @post("{id}")
  static createBig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
