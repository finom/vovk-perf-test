import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etn")
export default class EtnController {
  @operation({
    summary: "Get Etn",
  })
  @get()
  static getEtn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Etn",
  })
  @post("{id}")
  static createEtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
