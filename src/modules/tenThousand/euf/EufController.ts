import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euf")
export default class EufController {
  @operation({
    summary: "Get Euf",
  })
  @get()
  static getEuf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Euf",
  })
  @post("{id}")
  static createEuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
