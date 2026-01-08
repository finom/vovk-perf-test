import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftt")
export default class FttController {
  @operation({
    summary: "Get Ftt",
  })
  @get()
  static getFtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftt",
  })
  @post("{id}")
  static createFtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
