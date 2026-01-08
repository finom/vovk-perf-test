import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pa")
export default class PaController {
  @operation({
    summary: "Get Pa",
  })
  @get()
  static getPa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pa",
  })
  @post("{id}")
  static createPa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
