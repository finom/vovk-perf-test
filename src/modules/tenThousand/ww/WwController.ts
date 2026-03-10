import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ww")
export default class WwController {
  @operation({
    summary: "Get Ww",
  })
  @get()
  static getWw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ww",
  })
  @post("{id}")
  static createWw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
