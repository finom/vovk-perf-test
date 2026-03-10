import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("au")
export default class AuController {
  @operation({
    summary: "Get Au",
  })
  @get()
  static getAu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Au",
  })
  @post("{id}")
  static createAu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
