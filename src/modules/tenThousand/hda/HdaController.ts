import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hda")
export default class HdaController {
  @operation({
    summary: "Get Hda",
  })
  @get()
  static getHda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hda",
  })
  @post("{id}")
  static createHda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
