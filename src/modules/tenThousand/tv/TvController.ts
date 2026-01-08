import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tv")
export default class TvController {
  @operation({
    summary: "Get Tv",
  })
  @get()
  static getTv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tv",
  })
  @post("{id}")
  static createTv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
