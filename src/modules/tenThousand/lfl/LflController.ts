import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfl")
export default class LflController {
  @operation({
    summary: "Get Lfl",
  })
  @get()
  static getLfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfl",
  })
  @post("{id}")
  static createLfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
