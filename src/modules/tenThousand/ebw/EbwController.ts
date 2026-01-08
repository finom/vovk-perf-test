import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebw")
export default class EbwController {
  @operation({
    summary: "Get Ebw",
  })
  @get()
  static getEbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebw",
  })
  @post("{id}")
  static createEbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
