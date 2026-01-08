import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbb")
export default class MbbController {
  @operation({
    summary: "Get Mbb",
  })
  @get()
  static getMbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbb",
  })
  @post("{id}")
  static createMbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
