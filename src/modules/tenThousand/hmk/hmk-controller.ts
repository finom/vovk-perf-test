import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmk")
export default class HmkController {
  @operation({
    summary: "Get Hmk",
  })
  @get()
  static getHmk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmk",
  })
  @post("{id}")
  static createHmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
