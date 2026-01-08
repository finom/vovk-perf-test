import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btv")
export default class BtvController {
  @operation({
    summary: "Get Btv",
  })
  @get()
  static getBtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btv",
  })
  @post("{id}")
  static createBtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
