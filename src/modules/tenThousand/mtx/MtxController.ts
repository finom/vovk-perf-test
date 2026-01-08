import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtx")
export default class MtxController {
  @operation({
    summary: "Get Mtx",
  })
  @get()
  static getMtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtx",
  })
  @post("{id}")
  static createMtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
