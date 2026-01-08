import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kye")
export default class KyeController {
  @operation({
    summary: "Get Kye",
  })
  @get()
  static getKye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kye",
  })
  @post("{id}")
  static createKye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
