import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krj")
export default class KrjController {
  @operation({
    summary: "Get Krj",
  })
  @get()
  static getKrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krj",
  })
  @post("{id}")
  static createKrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
