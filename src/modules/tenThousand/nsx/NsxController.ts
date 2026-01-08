import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsx")
export default class NsxController {
  @operation({
    summary: "Get Nsx",
  })
  @get()
  static getNsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsx",
  })
  @post("{id}")
  static createNsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
