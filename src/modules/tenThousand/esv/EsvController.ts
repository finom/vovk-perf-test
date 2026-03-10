import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esv")
export default class EsvController {
  @operation({
    summary: "Get Esv",
  })
  @get()
  static getEsv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esv",
  })
  @post("{id}")
  static createEsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
