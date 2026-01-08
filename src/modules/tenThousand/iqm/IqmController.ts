import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqm")
export default class IqmController {
  @operation({
    summary: "Get Iqm",
  })
  @get()
  static getIqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqm",
  })
  @post("{id}")
  static createIqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
