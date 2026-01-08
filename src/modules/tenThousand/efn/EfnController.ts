import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efn")
export default class EfnController {
  @operation({
    summary: "Get Efn",
  })
  @get()
  static getEfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efn",
  })
  @post("{id}")
  static createEfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
