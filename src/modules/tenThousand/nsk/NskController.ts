import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsk")
export default class NskController {
  @operation({
    summary: "Get Nsk",
  })
  @get()
  static getNsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsk",
  })
  @post("{id}")
  static createNsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
