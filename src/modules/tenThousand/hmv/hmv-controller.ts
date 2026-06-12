import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmv")
export default class HmvController {
  @operation({
    summary: "Get Hmv",
  })
  @get()
  static getHmv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmv",
  })
  @post("{id}")
  static createHmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
