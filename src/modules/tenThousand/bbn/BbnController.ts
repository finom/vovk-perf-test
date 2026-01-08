import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbn")
export default class BbnController {
  @operation({
    summary: "Get Bbn",
  })
  @get()
  static getBbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbn",
  })
  @post("{id}")
  static createBbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
