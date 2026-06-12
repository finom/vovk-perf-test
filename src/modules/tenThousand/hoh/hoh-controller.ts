import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hoh")
export default class HohController {
  @operation({
    summary: "Get Hoh",
  })
  @get()
  static getHoh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hoh",
  })
  @post("{id}")
  static createHoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
