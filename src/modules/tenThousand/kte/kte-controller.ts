import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kte")
export default class KteController {
  @operation({
    summary: "Get Kte",
  })
  @get()
  static getKte = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kte",
  })
  @post("{id}")
  static createKte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
