import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hva")
export default class HvaController {
  @operation({
    summary: "Get Hva",
  })
  @get()
  static getHva = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hva",
  })
  @post("{id}")
  static createHva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
