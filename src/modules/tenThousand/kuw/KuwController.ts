import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuw")
export default class KuwController {
  @operation({
    summary: "Get Kuw",
  })
  @get()
  static getKuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuw",
  })
  @post("{id}")
  static createKuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
