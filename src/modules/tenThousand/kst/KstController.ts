import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kst")
export default class KstController {
  @operation({
    summary: "Get Kst",
  })
  @get()
  static getKst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kst",
  })
  @post("{id}")
  static createKst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
