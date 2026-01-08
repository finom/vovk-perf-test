import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqv")
export default class CqvController {
  @operation({
    summary: "Get Cqv",
  })
  @get()
  static getCqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqv",
  })
  @post("{id}")
  static createCqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
