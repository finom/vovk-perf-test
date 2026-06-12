import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajg")
export default class AjgController {
  @operation({
    summary: "Get Ajg",
  })
  @get()
  static getAjg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajg",
  })
  @post("{id}")
  static createAjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
