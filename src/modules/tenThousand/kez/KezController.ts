import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kez")
export default class KezController {
  @operation({
    summary: "Get Kez",
  })
  @get()
  static getKez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kez",
  })
  @post("{id}")
  static createKez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
