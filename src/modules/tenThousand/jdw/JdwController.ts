import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdw")
export default class JdwController {
  @operation({
    summary: "Get Jdw",
  })
  @get()
  static getJdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdw",
  })
  @post("{id}")
  static createJdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
