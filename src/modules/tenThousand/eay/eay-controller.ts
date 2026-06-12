import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eay")
export default class EayController {
  @operation({
    summary: "Get Eay",
  })
  @get()
  static getEay = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eay",
  })
  @post("{id}")
  static createEay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
