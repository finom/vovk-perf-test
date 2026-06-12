import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guo")
export default class GuoController {
  @operation({
    summary: "Get Guo",
  })
  @get()
  static getGuo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Guo",
  })
  @post("{id}")
  static createGuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
