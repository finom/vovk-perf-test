import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aly")
export default class AlyController {
  @operation({
    summary: "Get Aly",
  })
  @get()
  static getAly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aly",
  })
  @post("{id}")
  static createAly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
