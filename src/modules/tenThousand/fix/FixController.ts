import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fix")
export default class FixController {
  @operation({
    summary: "Get Fix",
  })
  @get()
  static getFix = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fix",
  })
  @post("{id}")
  static createFix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
