import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irv")
export default class IrvController {
  @operation({
    summary: "Get Irv",
  })
  @get()
  static getIrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irv",
  })
  @post("{id}")
  static createIrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
