import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avu")
export default class AvuController {
  @operation({
    summary: "Get Avu",
  })
  @get()
  static getAvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avu",
  })
  @post("{id}")
  static createAvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
