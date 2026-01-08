import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("k")
export default class KController {
  @operation({
    summary: "Get K",
  })
  @get()
  static getK = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create K",
  })
  @post("{id}")
  static createK = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
