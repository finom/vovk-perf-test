import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("al")
export default class AlController {
  @operation({
    summary: "Get Al",
  })
  @get()
  static getAl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Al",
  })
  @post("{id}")
  static createAl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
