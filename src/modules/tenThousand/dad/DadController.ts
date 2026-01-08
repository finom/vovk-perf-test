import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dad")
export default class DadController {
  @operation({
    summary: "Get Dad",
  })
  @get()
  static getDad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dad",
  })
  @post("{id}")
  static createDad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
