import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gza")
export default class GzaController {
  @operation({
    summary: "Get Gza",
  })
  @get()
  static getGza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gza",
  })
  @post("{id}")
  static createGza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
