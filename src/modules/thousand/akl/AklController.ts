import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akl")
export default class AklController {
  @operation({
    summary: "Get Akl",
  })
  @get()
  static getAkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akl",
  })
  @post("{id}")
  static createAkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
