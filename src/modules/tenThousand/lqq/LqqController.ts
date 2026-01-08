import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqq")
export default class LqqController {
  @operation({
    summary: "Get Lqq",
  })
  @get()
  static getLqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqq",
  })
  @post("{id}")
  static createLqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
