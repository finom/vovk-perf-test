import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adr")
export default class AdrController {
  @operation({
    summary: "Get Adr",
  })
  @get()
  static getAdr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adr",
  })
  @post("{id}")
  static createAdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
