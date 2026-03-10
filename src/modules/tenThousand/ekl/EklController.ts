import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekl")
export default class EklController {
  @operation({
    summary: "Get Ekl",
  })
  @get()
  static getEkl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekl",
  })
  @post("{id}")
  static createEkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
