import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehn")
export default class EhnController {
  @operation({
    summary: "Get Ehn",
  })
  @get()
  static getEhn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ehn",
  })
  @post("{id}")
  static createEhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
