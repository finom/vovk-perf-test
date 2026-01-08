import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwt")
export default class MwtController {
  @operation({
    summary: "Get Mwt",
  })
  @get()
  static getMwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwt",
  })
  @post("{id}")
  static createMwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
