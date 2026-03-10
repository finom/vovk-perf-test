import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ema")
export default class EmaController {
  @operation({
    summary: "Get Ema",
  })
  @get()
  static getEma = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ema",
  })
  @post("{id}")
  static createEma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
