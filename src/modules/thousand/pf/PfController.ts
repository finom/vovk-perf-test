import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pf")
export default class PfController {
  @operation({
    summary: "Get Pf",
  })
  @get()
  static getPf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pf",
  })
  @post("{id}")
  static createPf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
