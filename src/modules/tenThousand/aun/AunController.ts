import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aun")
export default class AunController {
  @operation({
    summary: "Get Aun",
  })
  @get()
  static getAun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aun",
  })
  @post("{id}")
  static createAun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
