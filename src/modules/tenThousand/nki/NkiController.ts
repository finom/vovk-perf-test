import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nki")
export default class NkiController {
  @operation({
    summary: "Get Nki",
  })
  @get()
  static getNki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nki",
  })
  @post("{id}")
  static createNki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
