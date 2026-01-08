import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fno")
export default class FnoController {
  @operation({
    summary: "Get Fno",
  })
  @get()
  static getFno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fno",
  })
  @post("{id}")
  static createFno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
