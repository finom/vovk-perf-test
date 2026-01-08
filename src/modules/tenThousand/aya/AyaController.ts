import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aya")
export default class AyaController {
  @operation({
    summary: "Get Aya",
  })
  @get()
  static getAya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aya",
  })
  @post("{id}")
  static createAya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
