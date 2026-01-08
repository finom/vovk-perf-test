import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("doa")
export default class DoaController {
  @operation({
    summary: "Get Doa",
  })
  @get()
  static getDoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doa",
  })
  @post("{id}")
  static createDoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
