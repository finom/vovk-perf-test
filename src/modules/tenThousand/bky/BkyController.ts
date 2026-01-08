import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bky")
export default class BkyController {
  @operation({
    summary: "Get Bky",
  })
  @get()
  static getBky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bky",
  })
  @post("{id}")
  static createBky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
