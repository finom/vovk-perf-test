import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmc")
export default class LmcController {
  @operation({
    summary: "Get Lmc",
  })
  @get()
  static getLmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmc",
  })
  @post("{id}")
  static createLmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
