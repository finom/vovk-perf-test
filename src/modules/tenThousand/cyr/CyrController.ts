import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyr")
export default class CyrController {
  @operation({
    summary: "Get Cyr",
  })
  @get()
  static getCyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyr",
  })
  @post("{id}")
  static createCyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
