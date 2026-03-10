import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klv")
export default class KlvController {
  @operation({
    summary: "Get Klv",
  })
  @get()
  static getKlv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Klv",
  })
  @post("{id}")
  static createKlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
