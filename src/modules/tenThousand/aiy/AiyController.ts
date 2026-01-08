import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aiy")
export default class AiyController {
  @operation({
    summary: "Get Aiy",
  })
  @get()
  static getAiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aiy",
  })
  @post("{id}")
  static createAiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
