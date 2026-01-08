import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxu")
export default class GxuController {
  @operation({
    summary: "Get Gxu",
  })
  @get()
  static getGxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxu",
  })
  @post("{id}")
  static createGxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
