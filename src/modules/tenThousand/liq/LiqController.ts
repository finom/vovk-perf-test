import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("liq")
export default class LiqController {
  @operation({
    summary: "Get Liq",
  })
  @get()
  static getLiq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Liq",
  })
  @post("{id}")
  static createLiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
