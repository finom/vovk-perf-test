import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vl")
export default class VlController {
  @operation({
    summary: "Get Vl",
  })
  @get()
  static getVl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vl",
  })
  @post("{id}")
  static createVl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
