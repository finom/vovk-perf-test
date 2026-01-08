import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akw")
export default class AkwController {
  @operation({
    summary: "Get Akw",
  })
  @get()
  static getAkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akw",
  })
  @post("{id}")
  static createAkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
