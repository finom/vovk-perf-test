import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftx")
export default class FtxController {
  @operation({
    summary: "Get Ftx",
  })
  @get()
  static getFtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftx",
  })
  @post("{id}")
  static createFtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
