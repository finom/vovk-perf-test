import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akn")
export default class AknController {
  @operation({
    summary: "Get Akn",
  })
  @get()
  static getAkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akn",
  })
  @post("{id}")
  static createAkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
