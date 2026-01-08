import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncz")
export default class NczController {
  @operation({
    summary: "Get Ncz",
  })
  @get()
  static getNcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncz",
  })
  @post("{id}")
  static createNcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
