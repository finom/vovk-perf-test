import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eki")
export default class EkiController {
  @operation({
    summary: "Get Eki",
  })
  @get()
  static getEki = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eki",
  })
  @post("{id}")
  static createEki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
