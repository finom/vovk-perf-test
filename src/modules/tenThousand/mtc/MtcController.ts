import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtc")
export default class MtcController {
  @operation({
    summary: "Get Mtc",
  })
  @get()
  static getMtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtc",
  })
  @post("{id}")
  static createMtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
