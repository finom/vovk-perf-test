import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nno")
export default class NnoController {
  @operation({
    summary: "Get Nno",
  })
  @get()
  static getNno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nno",
  })
  @post("{id}")
  static createNno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
