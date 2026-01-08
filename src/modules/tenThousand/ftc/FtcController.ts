import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftc")
export default class FtcController {
  @operation({
    summary: "Get Ftc",
  })
  @get()
  static getFtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftc",
  })
  @post("{id}")
  static createFtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
