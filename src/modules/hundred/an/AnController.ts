import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("an")
export default class AnController {
  @operation({
    summary: "Get An",
  })
  @get()
  static getAn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create An",
  })
  @post("{id}")
  static createAn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
