import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nec")
export default class NecController {
  @operation({
    summary: "Get Nec",
  })
  @get()
  static getNec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nec",
  })
  @post("{id}")
  static createNec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
