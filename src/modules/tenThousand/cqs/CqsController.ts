import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqs")
export default class CqsController {
  @operation({
    summary: "Get Cqs",
  })
  @get()
  static getCqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqs",
  })
  @post("{id}")
  static createCqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
