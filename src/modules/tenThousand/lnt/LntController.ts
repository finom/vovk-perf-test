import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnt")
export default class LntController {
  @operation({
    summary: "Get Lnt",
  })
  @get()
  static getLnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnt",
  })
  @post("{id}")
  static createLnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
