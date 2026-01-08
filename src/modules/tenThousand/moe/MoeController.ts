import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("moe")
export default class MoeController {
  @operation({
    summary: "Get Moe",
  })
  @get()
  static getMoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moe",
  })
  @post("{id}")
  static createMoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
