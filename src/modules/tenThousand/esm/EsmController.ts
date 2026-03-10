import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esm")
export default class EsmController {
  @operation({
    summary: "Get Esm",
  })
  @get()
  static getEsm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esm",
  })
  @post("{id}")
  static createEsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
