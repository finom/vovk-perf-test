import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsy")
export default class NsyController {
  @operation({
    summary: "Get Nsy",
  })
  @get()
  static getNsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsy",
  })
  @post("{id}")
  static createNsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
