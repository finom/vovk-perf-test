import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzm")
export default class MzmController {
  @operation({
    summary: "Get Mzm",
  })
  @get()
  static getMzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzm",
  })
  @post("{id}")
  static createMzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
