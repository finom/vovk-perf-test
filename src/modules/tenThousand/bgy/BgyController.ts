import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgy")
export default class BgyController {
  @operation({
    summary: "Get Bgy",
  })
  @get()
  static getBgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgy",
  })
  @post("{id}")
  static createBgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
