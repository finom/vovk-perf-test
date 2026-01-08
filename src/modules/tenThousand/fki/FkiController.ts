import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fki")
export default class FkiController {
  @operation({
    summary: "Get Fki",
  })
  @get()
  static getFki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fki",
  })
  @post("{id}")
  static createFki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
