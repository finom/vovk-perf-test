import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmd")
export default class KmdController {
  @operation({
    summary: "Get Kmd",
  })
  @get()
  static getKmd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmd",
  })
  @post("{id}")
  static createKmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
