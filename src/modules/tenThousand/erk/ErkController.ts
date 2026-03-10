import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erk")
export default class ErkController {
  @operation({
    summary: "Get Erk",
  })
  @get()
  static getErk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erk",
  })
  @post("{id}")
  static createErk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
