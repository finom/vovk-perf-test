import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwh")
export default class MwhController {
  @operation({
    summary: "Get Mwh",
  })
  @get()
  static getMwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwh",
  })
  @post("{id}")
  static createMwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
