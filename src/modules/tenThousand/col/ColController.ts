import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("col")
export default class ColController {
  @operation({
    summary: "Get Col",
  })
  @get()
  static getCol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Col",
  })
  @post("{id}")
  static createCol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
