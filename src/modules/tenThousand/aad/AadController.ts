import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aad")
export default class AadController {
  @operation({
    summary: "Get Aad",
  })
  @get()
  static getAad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aad",
  })
  @post("{id}")
  static createAad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
