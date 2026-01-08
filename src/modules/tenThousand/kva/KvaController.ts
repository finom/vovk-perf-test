import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kva")
export default class KvaController {
  @operation({
    summary: "Get Kva",
  })
  @get()
  static getKva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kva",
  })
  @post("{id}")
  static createKva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
