import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdv")
export default class CdvController {
  @operation({
    summary: "Get Cdv",
  })
  @get()
  static getCdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdv",
  })
  @post("{id}")
  static createCdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
