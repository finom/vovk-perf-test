import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kim")
export default class KimController {
  @operation({
    summary: "Get Kim",
  })
  @get()
  static getKim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kim",
  })
  @post("{id}")
  static createKim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
