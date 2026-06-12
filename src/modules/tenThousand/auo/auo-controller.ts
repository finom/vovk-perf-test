import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auo")
export default class AuoController {
  @operation({
    summary: "Get Auo",
  })
  @get()
  static getAuo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Auo",
  })
  @post("{id}")
  static createAuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
