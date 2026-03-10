import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esi")
export default class EsiController {
  @operation({
    summary: "Get Esi",
  })
  @get()
  static getEsi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esi",
  })
  @post("{id}")
  static createEsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
