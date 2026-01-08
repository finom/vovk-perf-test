import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpi")
export default class JpiController {
  @operation({
    summary: "Get Jpi",
  })
  @get()
  static getJpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpi",
  })
  @post("{id}")
  static createJpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
