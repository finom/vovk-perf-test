import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktu")
export default class KtuController {
  @operation({
    summary: "Get Ktu",
  })
  @get()
  static getKtu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktu",
  })
  @post("{id}")
  static createKtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
