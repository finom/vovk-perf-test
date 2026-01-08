import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikq")
export default class IkqController {
  @operation({
    summary: "Get Ikq",
  })
  @get()
  static getIkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikq",
  })
  @post("{id}")
  static createIkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
