import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdg")
export default class CdgController {
  @operation({
    summary: "Get Cdg",
  })
  @get()
  static getCdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdg",
  })
  @post("{id}")
  static createCdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
