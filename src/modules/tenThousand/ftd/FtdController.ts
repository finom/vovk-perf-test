import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftd")
export default class FtdController {
  @operation({
    summary: "Get Ftd",
  })
  @get()
  static getFtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftd",
  })
  @post("{id}")
  static createFtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
