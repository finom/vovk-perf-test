import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eip")
export default class EipController {
  @operation({
    summary: "Get Eip",
  })
  @get()
  static getEip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eip",
  })
  @post("{id}")
  static createEip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
