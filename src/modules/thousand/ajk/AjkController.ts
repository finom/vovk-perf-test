import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajk")
export default class AjkController {
  @operation({
    summary: "Get Ajk",
  })
  @get()
  static getAjk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajk",
  })
  @post("{id}")
  static createAjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
