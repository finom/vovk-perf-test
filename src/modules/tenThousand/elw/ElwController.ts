import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elw")
export default class ElwController {
  @operation({
    summary: "Get Elw",
  })
  @get()
  static getElw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elw",
  })
  @post("{id}")
  static createElw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
