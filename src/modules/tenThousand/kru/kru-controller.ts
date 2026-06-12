import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kru")
export default class KruController {
  @operation({
    summary: "Get Kru",
  })
  @get()
  static getKru = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kru",
  })
  @post("{id}")
  static createKru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
