import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcs")
export default class KcsController {
  @operation({
    summary: "Get Kcs",
  })
  @get()
  static getKcs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kcs",
  })
  @post("{id}")
  static createKcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
