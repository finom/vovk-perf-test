import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzz")
export default class MzzController {
  @operation({
    summary: "Get Mzz",
  })
  @get()
  static getMzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzz",
  })
  @post("{id}")
  static createMzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
