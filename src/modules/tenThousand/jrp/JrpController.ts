import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrp")
export default class JrpController {
  @operation({
    summary: "Get Jrp",
  })
  @get()
  static getJrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrp",
  })
  @post("{id}")
  static createJrp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
