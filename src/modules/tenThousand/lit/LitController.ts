import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lit")
export default class LitController {
  @operation({
    summary: "Get Lit",
  })
  @get()
  static getLit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lit",
  })
  @post("{id}")
  static createLit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
