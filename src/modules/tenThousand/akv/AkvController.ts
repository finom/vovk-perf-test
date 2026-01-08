import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akv")
export default class AkvController {
  @operation({
    summary: "Get Akv",
  })
  @get()
  static getAkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akv",
  })
  @post("{id}")
  static createAkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
