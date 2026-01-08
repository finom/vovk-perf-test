import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flm")
export default class FlmController {
  @operation({
    summary: "Get Flm",
  })
  @get()
  static getFlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flm",
  })
  @post("{id}")
  static createFlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
