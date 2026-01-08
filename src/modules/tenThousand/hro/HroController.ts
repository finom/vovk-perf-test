import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hro")
export default class HroController {
  @operation({
    summary: "Get Hro",
  })
  @get()
  static getHro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hro",
  })
  @post("{id}")
  static createHro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
