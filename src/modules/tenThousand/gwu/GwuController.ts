import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwu")
export default class GwuController {
  @operation({
    summary: "Get Gwu",
  })
  @get()
  static getGwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwu",
  })
  @post("{id}")
  static createGwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
