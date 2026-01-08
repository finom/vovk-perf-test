import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nek")
export default class NekController {
  @operation({
    summary: "Get Nek",
  })
  @get()
  static getNek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nek",
  })
  @post("{id}")
  static createNek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
