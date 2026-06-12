import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euo")
export default class EuoController {
  @operation({
    summary: "Get Euo",
  })
  @get()
  static getEuo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Euo",
  })
  @post("{id}")
  static createEuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
