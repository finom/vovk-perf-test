import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzj")
export default class JzjController {
  @operation({
    summary: "Get Jzj",
  })
  @get()
  static getJzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzj",
  })
  @post("{id}")
  static createJzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
