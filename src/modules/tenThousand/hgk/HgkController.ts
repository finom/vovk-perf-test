import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgk")
export default class HgkController {
  @operation({
    summary: "Get Hgk",
  })
  @get()
  static getHgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgk",
  })
  @post("{id}")
  static createHgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
