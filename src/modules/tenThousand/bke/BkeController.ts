import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bke")
export default class BkeController {
  @operation({
    summary: "Get Bke",
  })
  @get()
  static getBke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bke",
  })
  @post("{id}")
  static createBke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
