import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdj")
export default class HdjController {
  @operation({
    summary: "Get Hdj",
  })
  @get()
  static getHdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdj",
  })
  @post("{id}")
  static createHdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
