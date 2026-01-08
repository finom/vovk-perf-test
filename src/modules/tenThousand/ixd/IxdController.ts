import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixd")
export default class IxdController {
  @operation({
    summary: "Get Ixd",
  })
  @get()
  static getIxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixd",
  })
  @post("{id}")
  static createIxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
