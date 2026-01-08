import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fka")
export default class FkaController {
  @operation({
    summary: "Get Fka",
  })
  @get()
  static getFka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fka",
  })
  @post("{id}")
  static createFka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
