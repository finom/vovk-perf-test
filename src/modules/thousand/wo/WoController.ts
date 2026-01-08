import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wo")
export default class WoController {
  @operation({
    summary: "Get Wo",
  })
  @get()
  static getWo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wo",
  })
  @post("{id}")
  static createWo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
