import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dha")
export default class DhaController {
  @operation({
    summary: "Get Dha",
  })
  @get()
  static getDha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dha",
  })
  @post("{id}")
  static createDha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
