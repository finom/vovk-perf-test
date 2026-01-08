import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhc")
export default class LhcController {
  @operation({
    summary: "Get Lhc",
  })
  @get()
  static getLhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhc",
  })
  @post("{id}")
  static createLhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
