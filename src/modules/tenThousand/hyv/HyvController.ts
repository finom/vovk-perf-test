import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyv")
export default class HyvController {
  @operation({
    summary: "Get Hyv",
  })
  @get()
  static getHyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyv",
  })
  @post("{id}")
  static createHyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
