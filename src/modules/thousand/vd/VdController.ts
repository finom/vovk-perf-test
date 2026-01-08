import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vd")
export default class VdController {
  @operation({
    summary: "Get Vd",
  })
  @get()
  static getVd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vd",
  })
  @post("{id}")
  static createVd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
