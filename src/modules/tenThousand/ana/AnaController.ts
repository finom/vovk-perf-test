import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ana")
export default class AnaController {
  @operation({
    summary: "Get Ana",
  })
  @get()
  static getAna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ana",
  })
  @post("{id}")
  static createAna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
