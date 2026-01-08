import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akc")
export default class AkcController {
  @operation({
    summary: "Get Akc",
  })
  @get()
  static getAkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akc",
  })
  @post("{id}")
  static createAkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
