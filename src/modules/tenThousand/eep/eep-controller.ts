import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eep")
export default class EepController {
  @operation({
    summary: "Get Eep",
  })
  @get()
  static getEep = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eep",
  })
  @post("{id}")
  static createEep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
