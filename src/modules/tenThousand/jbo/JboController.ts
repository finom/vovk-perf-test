import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbo")
export default class JboController {
  @operation({
    summary: "Get Jbo",
  })
  @get()
  static getJbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbo",
  })
  @post("{id}")
  static createJbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
