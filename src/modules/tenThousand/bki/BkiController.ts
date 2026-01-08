import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bki")
export default class BkiController {
  @operation({
    summary: "Get Bki",
  })
  @get()
  static getBki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bki",
  })
  @post("{id}")
  static createBki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
