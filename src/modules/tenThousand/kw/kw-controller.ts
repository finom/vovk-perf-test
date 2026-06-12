import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kw")
export default class KwController {
  @operation({
    summary: "Get Kw",
  })
  @get()
  static getKw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kw",
  })
  @post("{id}")
  static createKw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
