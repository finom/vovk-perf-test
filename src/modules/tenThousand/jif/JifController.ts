import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jif")
export default class JifController {
  @operation({
    summary: "Get Jif",
  })
  @get()
  static getJif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jif",
  })
  @post("{id}")
  static createJif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
