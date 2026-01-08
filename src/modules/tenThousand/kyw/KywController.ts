import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyw")
export default class KywController {
  @operation({
    summary: "Get Kyw",
  })
  @get()
  static getKyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyw",
  })
  @post("{id}")
  static createKyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
