import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsj")
export default class HsjController {
  @operation({
    summary: "Get Hsj",
  })
  @get()
  static getHsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsj",
  })
  @post("{id}")
  static createHsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
