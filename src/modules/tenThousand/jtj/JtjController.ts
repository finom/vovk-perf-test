import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtj")
export default class JtjController {
  @operation({
    summary: "Get Jtj",
  })
  @get()
  static getJtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtj",
  })
  @post("{id}")
  static createJtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
