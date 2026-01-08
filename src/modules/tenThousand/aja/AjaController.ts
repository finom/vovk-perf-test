import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aja")
export default class AjaController {
  @operation({
    summary: "Get Aja",
  })
  @get()
  static getAja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aja",
  })
  @post("{id}")
  static createAja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
