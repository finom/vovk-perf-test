import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbm")
export default class KbmController {
  @operation({
    summary: "Get Kbm",
  })
  @get()
  static getKbm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbm",
  })
  @post("{id}")
  static createKbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
