import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdz")
export default class CdzController {
  @operation({
    summary: "Get Cdz",
  })
  @get()
  static getCdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdz",
  })
  @post("{id}")
  static createCdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
