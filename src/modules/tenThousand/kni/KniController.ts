import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kni")
export default class KniController {
  @operation({
    summary: "Get Kni",
  })
  @get()
  static getKni = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kni",
  })
  @post("{id}")
  static createKni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
