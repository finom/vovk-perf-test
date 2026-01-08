import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eed")
export default class EedController {
  @operation({
    summary: "Get Eed",
  })
  @get()
  static getEed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eed",
  })
  @post("{id}")
  static createEed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
