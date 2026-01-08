import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlf")
export default class HlfController {
  @operation({
    summary: "Get Hlf",
  })
  @get()
  static getHlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlf",
  })
  @post("{id}")
  static createHlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
