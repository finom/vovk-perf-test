import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtx")
export default class GtxController {
  @operation({
    summary: "Get Gtx",
  })
  @get()
  static getGtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtx",
  })
  @post("{id}")
  static createGtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
