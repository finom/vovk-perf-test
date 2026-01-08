import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anw")
export default class AnwController {
  @operation({
    summary: "Get Anw",
  })
  @get()
  static getAnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anw",
  })
  @post("{id}")
  static createAnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
