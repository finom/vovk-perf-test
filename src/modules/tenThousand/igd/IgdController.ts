import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igd")
export default class IgdController {
  @operation({
    summary: "Get Igd",
  })
  @get()
  static getIgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igd",
  })
  @post("{id}")
  static createIgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
