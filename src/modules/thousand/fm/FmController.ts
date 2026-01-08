import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fm")
export default class FmController {
  @operation({
    summary: "Get Fm",
  })
  @get()
  static getFm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fm",
  })
  @post("{id}")
  static createFm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
