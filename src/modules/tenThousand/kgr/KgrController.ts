import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgr")
export default class KgrController {
  @operation({
    summary: "Get Kgr",
  })
  @get()
  static getKgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgr",
  })
  @post("{id}")
  static createKgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
