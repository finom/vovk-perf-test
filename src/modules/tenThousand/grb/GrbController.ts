import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grb")
export default class GrbController {
  @operation({
    summary: "Get Grb",
  })
  @get()
  static getGrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grb",
  })
  @post("{id}")
  static createGrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
