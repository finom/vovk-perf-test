import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hml")
export default class HmlController {
  @operation({
    summary: "Get Hml",
  })
  @get()
  static getHml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hml",
  })
  @post("{id}")
  static createHml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
