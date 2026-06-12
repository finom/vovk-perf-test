import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egm")
export default class EgmController {
  @operation({
    summary: "Get Egm",
  })
  @get()
  static getEgm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egm",
  })
  @post("{id}")
  static createEgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
