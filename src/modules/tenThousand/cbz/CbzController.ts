import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbz")
export default class CbzController {
  @operation({
    summary: "Get Cbz",
  })
  @get()
  static getCbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbz",
  })
  @post("{id}")
  static createCbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
