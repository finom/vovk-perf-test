import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnt")
export default class GntController {
  @operation({
    summary: "Get Gnt",
  })
  @get()
  static getGnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnt",
  })
  @post("{id}")
  static createGnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
