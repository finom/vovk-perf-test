import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mds")
export default class MdsController {
  @operation({
    summary: "Get Mds",
  })
  @get()
  static getMds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mds",
  })
  @post("{id}")
  static createMds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
