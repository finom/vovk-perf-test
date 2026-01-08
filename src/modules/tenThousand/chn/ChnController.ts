import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chn")
export default class ChnController {
  @operation({
    summary: "Get Chn",
  })
  @get()
  static getChn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chn",
  })
  @post("{id}")
  static createChn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
