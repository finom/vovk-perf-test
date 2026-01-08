import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alq")
export default class AlqController {
  @operation({
    summary: "Get Alq",
  })
  @get()
  static getAlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alq",
  })
  @post("{id}")
  static createAlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
