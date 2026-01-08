import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfw")
export default class KfwController {
  @operation({
    summary: "Get Kfw",
  })
  @get()
  static getKfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfw",
  })
  @post("{id}")
  static createKfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
