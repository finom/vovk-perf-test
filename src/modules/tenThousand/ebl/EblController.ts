import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebl")
export default class EblController {
  @operation({
    summary: "Get Ebl",
  })
  @get()
  static getEbl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ebl",
  })
  @post("{id}")
  static createEbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
