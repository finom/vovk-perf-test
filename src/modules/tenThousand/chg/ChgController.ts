import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chg")
export default class ChgController {
  @operation({
    summary: "Get Chg",
  })
  @get()
  static getChg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chg",
  })
  @post("{id}")
  static createChg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
