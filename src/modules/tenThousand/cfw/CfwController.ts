import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfw")
export default class CfwController {
  @operation({
    summary: "Get Cfw",
  })
  @get()
  static getCfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfw",
  })
  @post("{id}")
  static createCfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
