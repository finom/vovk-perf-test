import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gco")
export default class GcoController {
  @operation({
    summary: "Get Gco",
  })
  @get()
  static getGco = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gco",
  })
  @post("{id}")
  static createGco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
