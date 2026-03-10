import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpv")
export default class KpvController {
  @operation({
    summary: "Get Kpv",
  })
  @get()
  static getKpv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpv",
  })
  @post("{id}")
  static createKpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
