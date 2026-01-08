import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ece")
export default class EceController {
  @operation({
    summary: "Get Ece",
  })
  @get()
  static getEce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ece",
  })
  @post("{id}")
  static createEce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
