import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exe")
export default class ExeController {
  @operation({
    summary: "Get Exe",
  })
  @get()
  static getExe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exe",
  })
  @post("{id}")
  static createExe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
