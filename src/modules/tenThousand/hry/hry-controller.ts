import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hry")
export default class HryController {
  @operation({
    summary: "Get Hry",
  })
  @get()
  static getHry = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hry",
  })
  @post("{id}")
  static createHry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
