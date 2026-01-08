import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbs")
export default class CbsController {
  @operation({
    summary: "Get Cbs",
  })
  @get()
  static getCbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbs",
  })
  @post("{id}")
  static createCbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
