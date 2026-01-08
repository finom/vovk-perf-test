import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebo")
export default class EboController {
  @operation({
    summary: "Get Ebo",
  })
  @get()
  static getEbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebo",
  })
  @post("{id}")
  static createEbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
