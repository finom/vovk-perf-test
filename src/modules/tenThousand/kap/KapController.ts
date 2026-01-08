import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kap")
export default class KapController {
  @operation({
    summary: "Get Kap",
  })
  @get()
  static getKap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kap",
  })
  @post("{id}")
  static createKap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
