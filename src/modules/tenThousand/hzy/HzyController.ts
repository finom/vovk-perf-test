import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzy")
export default class HzyController {
  @operation({
    summary: "Get Hzy",
  })
  @get()
  static getHzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzy",
  })
  @post("{id}")
  static createHzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
