import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekm")
export default class EkmController {
  @operation({
    summary: "Get Ekm",
  })
  @get()
  static getEkm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekm",
  })
  @post("{id}")
  static createEkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
