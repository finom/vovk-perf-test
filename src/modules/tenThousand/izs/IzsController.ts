import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izs")
export default class IzsController {
  @operation({
    summary: "Get Izs",
  })
  @get()
  static getIzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izs",
  })
  @post("{id}")
  static createIzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
