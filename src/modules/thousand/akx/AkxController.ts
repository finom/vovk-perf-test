import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akx")
export default class AkxController {
  @operation({
    summary: "Get Akx",
  })
  @get()
  static getAkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akx",
  })
  @post("{id}")
  static createAkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
