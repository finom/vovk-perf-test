import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hto")
export default class HtoController {
  @operation({
    summary: "Get Hto",
  })
  @get()
  static getHto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hto",
  })
  @post("{id}")
  static createHto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
