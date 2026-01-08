import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbz")
export default class MbzController {
  @operation({
    summary: "Get Mbz",
  })
  @get()
  static getMbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbz",
  })
  @post("{id}")
  static createMbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
