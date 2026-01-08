import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ya")
export default class YaController {
  @operation({
    summary: "Get Ya",
  })
  @get()
  static getYa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ya",
  })
  @post("{id}")
  static createYa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
