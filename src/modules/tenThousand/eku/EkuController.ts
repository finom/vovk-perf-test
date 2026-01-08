import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eku")
export default class EkuController {
  @operation({
    summary: "Get Eku",
  })
  @get()
  static getEku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eku",
  })
  @post("{id}")
  static createEku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
