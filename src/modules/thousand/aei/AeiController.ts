import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aei")
export default class AeiController {
  @operation({
    summary: "Get Aei",
  })
  @get()
  static getAei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aei",
  })
  @post("{id}")
  static createAei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
