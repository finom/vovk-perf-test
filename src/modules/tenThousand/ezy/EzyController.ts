import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezy")
export default class EzyController {
  @operation({
    summary: "Get Ezy",
  })
  @get()
  static getEzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezy",
  })
  @post("{id}")
  static createEzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
