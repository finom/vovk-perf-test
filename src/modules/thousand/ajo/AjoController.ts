import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajo")
export default class AjoController {
  @operation({
    summary: "Get Ajo",
  })
  @get()
  static getAjo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ajo",
  })
  @post("{id}")
  static createAjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
