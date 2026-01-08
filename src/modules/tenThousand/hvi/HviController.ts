import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvi")
export default class HviController {
  @operation({
    summary: "Get Hvi",
  })
  @get()
  static getHvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvi",
  })
  @post("{id}")
  static createHvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
