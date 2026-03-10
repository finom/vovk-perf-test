import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekn")
export default class EknController {
  @operation({
    summary: "Get Ekn",
  })
  @get()
  static getEkn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekn",
  })
  @post("{id}")
  static createEkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
