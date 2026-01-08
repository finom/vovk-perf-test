import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kos")
export default class KosController {
  @operation({
    summary: "Get Kos",
  })
  @get()
  static getKos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kos",
  })
  @post("{id}")
  static createKos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
