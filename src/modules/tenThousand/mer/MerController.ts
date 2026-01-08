import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mer")
export default class MerController {
  @operation({
    summary: "Get Mer",
  })
  @get()
  static getMer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mer",
  })
  @post("{id}")
  static createMer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
