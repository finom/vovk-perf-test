import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ks")
export default class KsController {
  @operation({
    summary: "Get Ks",
  })
  @get()
  static getKs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ks",
  })
  @post("{id}")
  static createKs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
