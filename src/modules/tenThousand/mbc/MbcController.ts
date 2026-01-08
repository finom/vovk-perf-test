import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbc")
export default class MbcController {
  @operation({
    summary: "Get Mbc",
  })
  @get()
  static getMbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbc",
  })
  @post("{id}")
  static createMbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
