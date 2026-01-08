import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("loe")
export default class LoeController {
  @operation({
    summary: "Get Loe",
  })
  @get()
  static getLoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loe",
  })
  @post("{id}")
  static createLoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
