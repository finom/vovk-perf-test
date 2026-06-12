import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mky")
export default class MkyController {
  @operation({
    summary: "Get Mky",
  })
  @get()
  static getMky = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mky",
  })
  @post("{id}")
  static createMky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
