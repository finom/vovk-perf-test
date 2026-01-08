import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aju")
export default class AjuController {
  @operation({
    summary: "Get Aju",
  })
  @get()
  static getAju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aju",
  })
  @post("{id}")
  static createAju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
