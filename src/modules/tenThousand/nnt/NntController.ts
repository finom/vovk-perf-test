import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnt")
export default class NntController {
  @operation({
    summary: "Get Nnt",
  })
  @get()
  static getNnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnt",
  })
  @post("{id}")
  static createNnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
