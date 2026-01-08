import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afz")
export default class AfzController {
  @operation({
    summary: "Get Afz",
  })
  @get()
  static getAfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afz",
  })
  @post("{id}")
  static createAfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
