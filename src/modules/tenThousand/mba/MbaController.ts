import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mba")
export default class MbaController {
  @operation({
    summary: "Get Mba",
  })
  @get()
  static getMba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mba",
  })
  @post("{id}")
  static createMba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
