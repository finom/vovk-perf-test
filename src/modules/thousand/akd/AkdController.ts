import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akd")
export default class AkdController {
  @operation({
    summary: "Get Akd",
  })
  @get()
  static getAkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akd",
  })
  @post("{id}")
  static createAkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
