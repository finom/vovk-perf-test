import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("deu")
export default class DeuController {
  @operation({
    summary: "Get Deu",
  })
  @get()
  static getDeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deu",
  })
  @post("{id}")
  static createDeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
