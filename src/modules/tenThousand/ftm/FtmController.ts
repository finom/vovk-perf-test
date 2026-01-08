import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftm")
export default class FtmController {
  @operation({
    summary: "Get Ftm",
  })
  @get()
  static getFtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftm",
  })
  @post("{id}")
  static createFtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
