import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjs")
export default class MjsController {
  @operation({
    summary: "Get Mjs",
  })
  @get()
  static getMjs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mjs",
  })
  @post("{id}")
  static createMjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
