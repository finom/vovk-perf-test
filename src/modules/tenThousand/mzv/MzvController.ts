import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzv")
export default class MzvController {
  @operation({
    summary: "Get Mzv",
  })
  @get()
  static getMzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzv",
  })
  @post("{id}")
  static createMzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
