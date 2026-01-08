import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kne")
export default class KneController {
  @operation({
    summary: "Get Kne",
  })
  @get()
  static getKne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kne",
  })
  @post("{id}")
  static createKne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
