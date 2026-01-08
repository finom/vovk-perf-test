import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdx")
export default class CdxController {
  @operation({
    summary: "Get Cdx",
  })
  @get()
  static getCdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdx",
  })
  @post("{id}")
  static createCdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
