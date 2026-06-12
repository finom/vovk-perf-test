import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atr")
export default class AtrController {
  @operation({
    summary: "Get Atr",
  })
  @get()
  static getAtr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Atr",
  })
  @post("{id}")
  static createAtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
