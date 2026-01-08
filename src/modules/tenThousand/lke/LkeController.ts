import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lke")
export default class LkeController {
  @operation({
    summary: "Get Lke",
  })
  @get()
  static getLke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lke",
  })
  @post("{id}")
  static createLke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
