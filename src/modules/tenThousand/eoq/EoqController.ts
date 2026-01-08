import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eoq")
export default class EoqController {
  @operation({
    summary: "Get Eoq",
  })
  @get()
  static getEoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoq",
  })
  @post("{id}")
  static createEoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
