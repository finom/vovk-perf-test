import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("oe")
export default class OeController {
  @operation({
    summary: "Get Oe",
  })
  @get()
  static getOe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Oe",
  })
  @post("{id}")
  static createOe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
