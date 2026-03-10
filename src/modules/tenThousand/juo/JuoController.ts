import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juo")
export default class JuoController {
  @operation({
    summary: "Get Juo",
  })
  @get()
  static getJuo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Juo",
  })
  @post("{id}")
  static createJuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
