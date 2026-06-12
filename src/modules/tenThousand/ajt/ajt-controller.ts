import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajt")
export default class AjtController {
  @operation({
    summary: "Get Ajt",
  })
  @get()
  static getAjt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajt",
  })
  @post("{id}")
  static createAjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
