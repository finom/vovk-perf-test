import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auk")
export default class AukController {
  @operation({
    summary: "Get Auk",
  })
  @get()
  static getAuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auk",
  })
  @post("{id}")
  static createAuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
