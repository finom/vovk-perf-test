import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hga")
export default class HgaController {
  @operation({
    summary: "Get Hga",
  })
  @get()
  static getHga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hga",
  })
  @post("{id}")
  static createHga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
