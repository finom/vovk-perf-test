import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtt")
export default class GttController {
  @operation({
    summary: "Get Gtt",
  })
  @get()
  static getGtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtt",
  })
  @post("{id}")
  static createGtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
