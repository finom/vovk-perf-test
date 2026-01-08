import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elr")
export default class ElrController {
  @operation({
    summary: "Get Elr",
  })
  @get()
  static getElr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elr",
  })
  @post("{id}")
  static createElr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
