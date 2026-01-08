import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgj")
export default class FgjController {
  @operation({
    summary: "Get Fgj",
  })
  @get()
  static getFgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgj",
  })
  @post("{id}")
  static createFgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
