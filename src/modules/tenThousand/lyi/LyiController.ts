import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyi")
export default class LyiController {
  @operation({
    summary: "Get Lyi",
  })
  @get()
  static getLyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyi",
  })
  @post("{id}")
  static createLyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
