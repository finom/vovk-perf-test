import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfw")
export default class LfwController {
  @operation({
    summary: "Get Lfw",
  })
  @get()
  static getLfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfw",
  })
  @post("{id}")
  static createLfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
