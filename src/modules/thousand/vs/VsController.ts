import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vs")
export default class VsController {
  @operation({
    summary: "Get Vs",
  })
  @get()
  static getVs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vs",
  })
  @post("{id}")
  static createVs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
