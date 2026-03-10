import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajx")
export default class AjxController {
  @operation({
    summary: "Get Ajx",
  })
  @get()
  static getAjx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajx",
  })
  @post("{id}")
  static createAjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
