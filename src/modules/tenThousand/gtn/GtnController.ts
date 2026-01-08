import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtn")
export default class GtnController {
  @operation({
    summary: "Get Gtn",
  })
  @get()
  static getGtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtn",
  })
  @post("{id}")
  static createGtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
