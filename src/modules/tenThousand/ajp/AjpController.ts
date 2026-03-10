import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajp")
export default class AjpController {
  @operation({
    summary: "Get Ajp",
  })
  @get()
  static getAjp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajp",
  })
  @post("{id}")
  static createAjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
