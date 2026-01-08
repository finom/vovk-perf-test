import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nla")
export default class NlaController {
  @operation({
    summary: "Get Nla",
  })
  @get()
  static getNla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nla",
  })
  @post("{id}")
  static createNla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
