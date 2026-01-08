import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("het")
export default class HetController {
  @operation({
    summary: "Get Het",
  })
  @get()
  static getHet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Het",
  })
  @post("{id}")
  static createHet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
