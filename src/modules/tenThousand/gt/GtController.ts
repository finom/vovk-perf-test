import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gt")
export default class GtController {
  @operation({
    summary: "Get Gt",
  })
  @get()
  static getGt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gt",
  })
  @post("{id}")
  static createGt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
