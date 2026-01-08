import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehk")
export default class EhkController {
  @operation({
    summary: "Get Ehk",
  })
  @get()
  static getEhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehk",
  })
  @post("{id}")
  static createEhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
