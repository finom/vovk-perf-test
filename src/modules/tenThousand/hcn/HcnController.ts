import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcn")
export default class HcnController {
  @operation({
    summary: "Get Hcn",
  })
  @get()
  static getHcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcn",
  })
  @post("{id}")
  static createHcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
