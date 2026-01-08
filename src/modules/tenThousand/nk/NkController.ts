import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nk")
export default class NkController {
  @operation({
    summary: "Get Nk",
  })
  @get()
  static getNk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nk",
  })
  @post("{id}")
  static createNk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
