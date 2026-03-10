import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eou")
export default class EouController {
  @operation({
    summary: "Get Eou",
  })
  @get()
  static getEou = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eou",
  })
  @post("{id}")
  static createEou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
