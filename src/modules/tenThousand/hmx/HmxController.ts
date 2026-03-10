import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmx")
export default class HmxController {
  @operation({
    summary: "Get Hmx",
  })
  @get()
  static getHmx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmx",
  })
  @post("{id}")
  static createHmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
