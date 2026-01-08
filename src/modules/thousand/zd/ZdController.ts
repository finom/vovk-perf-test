import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zd")
export default class ZdController {
  @operation({
    summary: "Get Zd",
  })
  @get()
  static getZd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zd",
  })
  @post("{id}")
  static createZd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
