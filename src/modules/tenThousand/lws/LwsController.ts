import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lws")
export default class LwsController {
  @operation({
    summary: "Get Lws",
  })
  @get()
  static getLws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lws",
  })
  @post("{id}")
  static createLws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
