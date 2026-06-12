import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hta")
export default class HtaController {
  @operation({
    summary: "Get Hta",
  })
  @get()
  static getHta = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hta",
  })
  @post("{id}")
  static createHta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
