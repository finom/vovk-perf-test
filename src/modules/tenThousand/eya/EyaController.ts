import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eya")
export default class EyaController {
  @operation({
    summary: "Get Eya",
  })
  @get()
  static getEya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eya",
  })
  @post("{id}")
  static createEya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
