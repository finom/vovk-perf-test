import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klj")
export default class KljController {
  @operation({
    summary: "Get Klj",
  })
  @get()
  static getKlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klj",
  })
  @post("{id}")
  static createKlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
