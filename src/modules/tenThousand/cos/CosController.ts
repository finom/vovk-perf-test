import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cos")
export default class CosController {
  @operation({
    summary: "Get Cos",
  })
  @get()
  static getCos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cos",
  })
  @post("{id}")
  static createCos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
