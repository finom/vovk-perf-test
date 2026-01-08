import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtn")
export default class MtnController {
  @operation({
    summary: "Get Mtn",
  })
  @get()
  static getMtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtn",
  })
  @post("{id}")
  static createMtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
