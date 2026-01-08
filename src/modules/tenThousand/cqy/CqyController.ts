import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqy")
export default class CqyController {
  @operation({
    summary: "Get Cqy",
  })
  @get()
  static getCqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqy",
  })
  @post("{id}")
  static createCqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
