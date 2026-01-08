import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kav")
export default class KavController {
  @operation({
    summary: "Get Kav",
  })
  @get()
  static getKav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kav",
  })
  @post("{id}")
  static createKav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
