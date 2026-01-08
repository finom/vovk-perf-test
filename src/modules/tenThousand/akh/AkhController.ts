import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akh")
export default class AkhController {
  @operation({
    summary: "Get Akh",
  })
  @get()
  static getAkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akh",
  })
  @post("{id}")
  static createAkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
