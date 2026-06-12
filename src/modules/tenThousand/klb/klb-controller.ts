import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klb")
export default class KlbController {
  @operation({
    summary: "Get Klb",
  })
  @get()
  static getKlb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Klb",
  })
  @post("{id}")
  static createKlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
