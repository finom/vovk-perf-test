import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajf")
export default class AjfController {
  @operation({
    summary: "Get Ajf",
  })
  @get()
  static getAjf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajf",
  })
  @post("{id}")
  static createAjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
