import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbz")
export default class LbzController {
  @operation({
    summary: "Get Lbz",
  })
  @get()
  static getLbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbz",
  })
  @post("{id}")
  static createLbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
