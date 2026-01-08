import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nna")
export default class NnaController {
  @operation({
    summary: "Get Nna",
  })
  @get()
  static getNna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nna",
  })
  @post("{id}")
  static createNna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
