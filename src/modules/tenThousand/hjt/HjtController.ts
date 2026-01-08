import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjt")
export default class HjtController {
  @operation({
    summary: "Get Hjt",
  })
  @get()
  static getHjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjt",
  })
  @post("{id}")
  static createHjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
