import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehw")
export default class EhwController {
  @operation({
    summary: "Get Ehw",
  })
  @get()
  static getEhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehw",
  })
  @post("{id}")
  static createEhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
