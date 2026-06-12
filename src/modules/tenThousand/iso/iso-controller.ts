import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iso")
export default class IsoController {
  @operation({
    summary: "Get Iso",
  })
  @get()
  static getIso = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iso",
  })
  @post("{id}")
  static createIso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
