import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aku")
export default class AkuController {
  @operation({
    summary: "Get Aku",
  })
  @get()
  static getAku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aku",
  })
  @post("{id}")
  static createAku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
