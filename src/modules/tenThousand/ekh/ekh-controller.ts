import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekh")
export default class EkhController {
  @operation({
    summary: "Get Ekh",
  })
  @get()
  static getEkh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekh",
  })
  @post("{id}")
  static createEkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
