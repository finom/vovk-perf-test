import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cka")
export default class CkaController {
  @operation({
    summary: "Get Cka",
  })
  @get()
  static getCka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cka",
  })
  @post("{id}")
  static createCka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
