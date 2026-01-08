import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kiu")
export default class KiuController {
  @operation({
    summary: "Get Kiu",
  })
  @get()
  static getKiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kiu",
  })
  @post("{id}")
  static createKiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
