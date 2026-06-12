import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krc")
export default class KrcController {
  @operation({
    summary: "Get Krc",
  })
  @get()
  static getKrc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krc",
  })
  @post("{id}")
  static createKrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
