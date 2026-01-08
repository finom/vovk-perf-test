import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pn")
export default class PnController {
  @operation({
    summary: "Get Pn",
  })
  @get()
  static getPn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pn",
  })
  @post("{id}")
  static createPn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
