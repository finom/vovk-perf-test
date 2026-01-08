import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqe")
export default class JqeController {
  @operation({
    summary: "Get Jqe",
  })
  @get()
  static getJqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqe",
  })
  @post("{id}")
  static createJqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
