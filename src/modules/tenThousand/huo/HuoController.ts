import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huo")
export default class HuoController {
  @operation({
    summary: "Get Huo",
  })
  @get()
  static getHuo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Huo",
  })
  @post("{id}")
  static createHuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
