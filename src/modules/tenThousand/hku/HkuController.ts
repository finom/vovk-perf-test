import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hku")
export default class HkuController {
  @operation({
    summary: "Get Hku",
  })
  @get()
  static getHku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hku",
  })
  @post("{id}")
  static createHku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
