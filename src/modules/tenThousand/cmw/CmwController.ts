import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmw")
export default class CmwController {
  @operation({
    summary: "Get Cmw",
  })
  @get()
  static getCmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmw",
  })
  @post("{id}")
  static createCmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
