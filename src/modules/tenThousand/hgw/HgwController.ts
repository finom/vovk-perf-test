import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgw")
export default class HgwController {
  @operation({
    summary: "Get Hgw",
  })
  @get()
  static getHgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgw",
  })
  @post("{id}")
  static createHgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
