import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aoa")
export default class AoaController {
  @operation({
    summary: "Get Aoa",
  })
  @get()
  static getAoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoa",
  })
  @post("{id}")
  static createAoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
