import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klz")
export default class KlzController {
  @operation({
    summary: "Get Klz",
  })
  @get()
  static getKlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klz",
  })
  @post("{id}")
  static createKlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
