import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgj")
export default class MgjController {
  @operation({
    summary: "Get Mgj",
  })
  @get()
  static getMgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgj",
  })
  @post("{id}")
  static createMgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
