import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yn")
export default class YnController {
  @operation({
    summary: "Get Yn",
  })
  @get()
  static getYn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yn",
  })
  @post("{id}")
  static createYn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
