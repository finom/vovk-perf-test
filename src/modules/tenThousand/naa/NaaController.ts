import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("naa")
export default class NaaController {
  @operation({
    summary: "Get Naa",
  })
  @get()
  static getNaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Naa",
  })
  @post("{id}")
  static createNaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
