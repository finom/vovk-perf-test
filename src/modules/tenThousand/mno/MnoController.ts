import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mno")
export default class MnoController {
  @operation({
    summary: "Get Mno",
  })
  @get()
  static getMno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mno",
  })
  @post("{id}")
  static createMno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
