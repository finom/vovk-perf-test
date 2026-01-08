import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fiu")
export default class FiuController {
  @operation({
    summary: "Get Fiu",
  })
  @get()
  static getFiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fiu",
  })
  @post("{id}")
  static createFiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
