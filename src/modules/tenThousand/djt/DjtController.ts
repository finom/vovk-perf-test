import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djt")
export default class DjtController {
  @operation({
    summary: "Get Djt",
  })
  @get()
  static getDjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djt",
  })
  @post("{id}")
  static createDjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
