import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alr")
export default class AlrController {
  @operation({
    summary: "Get Alr",
  })
  @get()
  static getAlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alr",
  })
  @post("{id}")
  static createAlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
