import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aol")
export default class AolController {
  @operation({
    summary: "Get Aol",
  })
  @get()
  static getAol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aol",
  })
  @post("{id}")
  static createAol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
