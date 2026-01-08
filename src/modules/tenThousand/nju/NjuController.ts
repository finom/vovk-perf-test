import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nju")
export default class NjuController {
  @operation({
    summary: "Get Nju",
  })
  @get()
  static getNju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nju",
  })
  @post("{id}")
  static createNju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
