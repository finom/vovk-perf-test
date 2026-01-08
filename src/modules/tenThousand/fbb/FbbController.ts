import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbb")
export default class FbbController {
  @operation({
    summary: "Get Fbb",
  })
  @get()
  static getFbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbb",
  })
  @post("{id}")
  static createFbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
