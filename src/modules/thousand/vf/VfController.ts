import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vf")
export default class VfController {
  @operation({
    summary: "Get Vf",
  })
  @get()
  static getVf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vf",
  })
  @post("{id}")
  static createVf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
