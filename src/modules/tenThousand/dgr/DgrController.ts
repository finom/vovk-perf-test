import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgr")
export default class DgrController {
  @operation({
    summary: "Get Dgr",
  })
  @get()
  static getDgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgr",
  })
  @post("{id}")
  static createDgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
