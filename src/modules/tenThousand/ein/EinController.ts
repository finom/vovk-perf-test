import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ein")
export default class EinController {
  @operation({
    summary: "Get Ein",
  })
  @get()
  static getEin = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ein",
  })
  @post("{id}")
  static createEin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
