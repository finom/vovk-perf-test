import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eac")
export default class EacController {
  @operation({
    summary: "Get Eac",
  })
  @get()
  static getEac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eac",
  })
  @post("{id}")
  static createEac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
