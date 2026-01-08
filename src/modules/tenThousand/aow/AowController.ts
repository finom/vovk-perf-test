import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aow")
export default class AowController {
  @operation({
    summary: "Get Aow",
  })
  @get()
  static getAow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aow",
  })
  @post("{id}")
  static createAow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
