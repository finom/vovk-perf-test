import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjt")
export default class MjtController {
  @operation({
    summary: "Get Mjt",
  })
  @get()
  static getMjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjt",
  })
  @post("{id}")
  static createMjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
