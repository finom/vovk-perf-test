import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekd")
export default class EkdController {
  @operation({
    summary: "Get Ekd",
  })
  @get()
  static getEkd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekd",
  })
  @post("{id}")
  static createEkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
