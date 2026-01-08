import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acw")
export default class AcwController {
  @operation({
    summary: "Get Acw",
  })
  @get()
  static getAcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acw",
  })
  @post("{id}")
  static createAcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
