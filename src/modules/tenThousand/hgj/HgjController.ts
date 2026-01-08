import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgj")
export default class HgjController {
  @operation({
    summary: "Get Hgj",
  })
  @get()
  static getHgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgj",
  })
  @post("{id}")
  static createHgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
