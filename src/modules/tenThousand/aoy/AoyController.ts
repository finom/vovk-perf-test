import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aoy")
export default class AoyController {
  @operation({
    summary: "Get Aoy",
  })
  @get()
  static getAoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoy",
  })
  @post("{id}")
  static createAoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
