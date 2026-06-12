import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuk")
export default class KukController {
  @operation({
    summary: "Get Kuk",
  })
  @get()
  static getKuk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kuk",
  })
  @post("{id}")
  static createKuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
