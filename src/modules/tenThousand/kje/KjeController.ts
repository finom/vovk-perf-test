import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kje")
export default class KjeController {
  @operation({
    summary: "Get Kje",
  })
  @get()
  static getKje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kje",
  })
  @post("{id}")
  static createKje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
