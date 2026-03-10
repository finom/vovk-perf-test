import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krp")
export default class KrpController {
  @operation({
    summary: "Get Krp",
  })
  @get()
  static getKrp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krp",
  })
  @post("{id}")
  static createKrp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
