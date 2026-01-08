import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlh")
export default class NlhController {
  @operation({
    summary: "Get Nlh",
  })
  @get()
  static getNlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlh",
  })
  @post("{id}")
  static createNlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
