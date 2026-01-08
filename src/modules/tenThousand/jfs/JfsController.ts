import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfs")
export default class JfsController {
  @operation({
    summary: "Get Jfs",
  })
  @get()
  static getJfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfs",
  })
  @post("{id}")
  static createJfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
