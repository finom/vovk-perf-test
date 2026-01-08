import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kom")
export default class KomController {
  @operation({
    summary: "Get Kom",
  })
  @get()
  static getKom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kom",
  })
  @post("{id}")
  static createKom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
