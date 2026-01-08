import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akb")
export default class AkbController {
  @operation({
    summary: "Get Akb",
  })
  @get()
  static getAkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akb",
  })
  @post("{id}")
  static createAkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
