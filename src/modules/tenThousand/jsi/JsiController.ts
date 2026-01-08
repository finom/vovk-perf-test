import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsi")
export default class JsiController {
  @operation({
    summary: "Get Jsi",
  })
  @get()
  static getJsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsi",
  })
  @post("{id}")
  static createJsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
