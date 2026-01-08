import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bor")
export default class BorController {
  @operation({
    summary: "Get Bor",
  })
  @get()
  static getBor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bor",
  })
  @post("{id}")
  static createBor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
