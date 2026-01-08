import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kls")
export default class KlsController {
  @operation({
    summary: "Get Kls",
  })
  @get()
  static getKls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kls",
  })
  @post("{id}")
  static createKls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
