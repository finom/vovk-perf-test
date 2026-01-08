import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klh")
export default class KlhController {
  @operation({
    summary: "Get Klh",
  })
  @get()
  static getKlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klh",
  })
  @post("{id}")
  static createKlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
