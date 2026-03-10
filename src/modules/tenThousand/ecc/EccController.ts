import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecc")
export default class EccController {
  @operation({
    summary: "Get Ecc",
  })
  @get()
  static getEcc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecc",
  })
  @post("{id}")
  static createEcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
