import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekj")
export default class EkjController {
  @operation({
    summary: "Get Ekj",
  })
  @get()
  static getEkj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekj",
  })
  @post("{id}")
  static createEkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
