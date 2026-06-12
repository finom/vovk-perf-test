import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmj")
export default class HmjController {
  @operation({
    summary: "Get Hmj",
  })
  @get()
  static getHmj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmj",
  })
  @post("{id}")
  static createHmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
