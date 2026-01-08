import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hss")
export default class HssController {
  @operation({
    summary: "Get Hss",
  })
  @get()
  static getHss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hss",
  })
  @post("{id}")
  static createHss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
