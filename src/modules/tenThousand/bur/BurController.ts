import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bur")
export default class BurController {
  @operation({
    summary: "Get Bur",
  })
  @get()
  static getBur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bur",
  })
  @post("{id}")
  static createBur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
