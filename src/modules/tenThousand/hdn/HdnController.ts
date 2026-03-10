import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdn")
export default class HdnController {
  @operation({
    summary: "Get Hdn",
  })
  @get()
  static getHdn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdn",
  })
  @post("{id}")
  static createHdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
