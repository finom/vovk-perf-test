import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mos")
export default class MosController {
  @operation({
    summary: "Get Mos",
  })
  @get()
  static getMos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mos",
  })
  @post("{id}")
  static createMos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
