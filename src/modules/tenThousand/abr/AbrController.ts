import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abr")
export default class AbrController {
  @operation({
    summary: "Get Abr",
  })
  @get()
  static getAbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abr",
  })
  @post("{id}")
  static createAbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
