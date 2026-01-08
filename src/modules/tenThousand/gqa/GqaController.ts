import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqa")
export default class GqaController {
  @operation({
    summary: "Get Gqa",
  })
  @get()
  static getGqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqa",
  })
  @post("{id}")
  static createGqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
