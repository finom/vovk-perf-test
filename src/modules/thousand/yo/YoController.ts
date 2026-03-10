import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yo")
export default class YoController {
  @operation({
    summary: "Get Yo",
  })
  @get()
  static getYo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yo",
  })
  @post("{id}")
  static createYo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
