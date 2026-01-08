import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyu")
export default class LyuController {
  @operation({
    summary: "Get Lyu",
  })
  @get()
  static getLyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyu",
  })
  @post("{id}")
  static createLyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
