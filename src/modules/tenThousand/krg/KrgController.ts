import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krg")
export default class KrgController {
  @operation({
    summary: "Get Krg",
  })
  @get()
  static getKrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krg",
  })
  @post("{id}")
  static createKrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
