import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpl")
export default class LplController {
  @operation({
    summary: "Get Lpl",
  })
  @get()
  static getLpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpl",
  })
  @post("{id}")
  static createLpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
