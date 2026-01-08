import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aam")
export default class AamController {
  @operation({
    summary: "Get Aam",
  })
  @get()
  static getAam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aam",
  })
  @post("{id}")
  static createAam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
