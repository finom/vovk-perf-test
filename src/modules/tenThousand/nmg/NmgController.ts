import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmg")
export default class NmgController {
  @operation({
    summary: "Get Nmg",
  })
  @get()
  static getNmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmg",
  })
  @post("{id}")
  static createNmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
