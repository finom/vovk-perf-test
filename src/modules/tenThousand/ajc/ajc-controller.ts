import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajc")
export default class AjcController {
  @operation({
    summary: "Get Ajc",
  })
  @get()
  static getAjc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajc",
  })
  @post("{id}")
  static createAjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
