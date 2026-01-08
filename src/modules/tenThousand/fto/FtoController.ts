import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fto")
export default class FtoController {
  @operation({
    summary: "Get Fto",
  })
  @get()
  static getFto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fto",
  })
  @post("{id}")
  static createFto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
