import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcl")
export default class HclController {
  @operation({
    summary: "Get Hcl",
  })
  @get()
  static getHcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcl",
  })
  @post("{id}")
  static createHcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
