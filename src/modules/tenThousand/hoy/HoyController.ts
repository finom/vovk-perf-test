import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hoy")
export default class HoyController {
  @operation({
    summary: "Get Hoy",
  })
  @get()
  static getHoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoy",
  })
  @post("{id}")
  static createHoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
