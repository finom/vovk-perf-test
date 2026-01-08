import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lup")
export default class LupController {
  @operation({
    summary: "Get Lup",
  })
  @get()
  static getLup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lup",
  })
  @post("{id}")
  static createLup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
