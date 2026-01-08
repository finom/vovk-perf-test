import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljt")
export default class LjtController {
  @operation({
    summary: "Get Ljt",
  })
  @get()
  static getLjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljt",
  })
  @post("{id}")
  static createLjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
