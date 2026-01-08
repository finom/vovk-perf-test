import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jac")
export default class JacController {
  @operation({
    summary: "Get Jac",
  })
  @get()
  static getJac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jac",
  })
  @post("{id}")
  static createJac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
