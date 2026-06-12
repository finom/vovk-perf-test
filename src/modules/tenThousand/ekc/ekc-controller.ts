import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekc")
export default class EkcController {
  @operation({
    summary: "Get Ekc",
  })
  @get()
  static getEkc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekc",
  })
  @post("{id}")
  static createEkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
