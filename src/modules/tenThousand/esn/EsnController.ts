import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esn")
export default class EsnController {
  @operation({
    summary: "Get Esn",
  })
  @get()
  static getEsn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esn",
  })
  @post("{id}")
  static createEsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
