import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kol")
export default class KolController {
  @operation({
    summary: "Get Kol",
  })
  @get()
  static getKol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kol",
  })
  @post("{id}")
  static createKol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
