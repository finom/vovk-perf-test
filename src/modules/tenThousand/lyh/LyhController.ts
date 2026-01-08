import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyh")
export default class LyhController {
  @operation({
    summary: "Get Lyh",
  })
  @get()
  static getLyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyh",
  })
  @post("{id}")
  static createLyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
