import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lki")
export default class LkiController {
  @operation({
    summary: "Get Lki",
  })
  @get()
  static getLki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lki",
  })
  @post("{id}")
  static createLki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
