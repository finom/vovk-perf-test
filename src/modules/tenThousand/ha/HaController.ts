import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ha")
export default class HaController {
  @operation({
    summary: "Get Ha",
  })
  @get()
  static getHa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ha",
  })
  @post("{id}")
  static createHa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
