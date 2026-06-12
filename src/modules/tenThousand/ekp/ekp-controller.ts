import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekp")
export default class EkpController {
  @operation({
    summary: "Get Ekp",
  })
  @get()
  static getEkp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekp",
  })
  @post("{id}")
  static createEkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
