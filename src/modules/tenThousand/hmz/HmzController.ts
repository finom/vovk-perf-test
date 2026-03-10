import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmz")
export default class HmzController {
  @operation({
    summary: "Get Hmz",
  })
  @get()
  static getHmz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmz",
  })
  @post("{id}")
  static createHmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
