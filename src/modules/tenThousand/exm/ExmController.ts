import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exm")
export default class ExmController {
  @operation({
    summary: "Get Exm",
  })
  @get()
  static getExm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exm",
  })
  @post("{id}")
  static createExm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
