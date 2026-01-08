import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpg")
export default class GpgController {
  @operation({
    summary: "Get Gpg",
  })
  @get()
  static getGpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpg",
  })
  @post("{id}")
  static createGpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
