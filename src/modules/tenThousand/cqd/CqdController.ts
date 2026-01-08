import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqd")
export default class CqdController {
  @operation({
    summary: "Get Cqd",
  })
  @get()
  static getCqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqd",
  })
  @post("{id}")
  static createCqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
