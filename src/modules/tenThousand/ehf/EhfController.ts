import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehf")
export default class EhfController {
  @operation({
    summary: "Get Ehf",
  })
  @get()
  static getEhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehf",
  })
  @post("{id}")
  static createEhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
