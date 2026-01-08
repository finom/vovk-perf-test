import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqj")
export default class CqjController {
  @operation({
    summary: "Get Cqj",
  })
  @get()
  static getCqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqj",
  })
  @post("{id}")
  static createCqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
