import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzv")
export default class HzvController {
  @operation({
    summary: "Get Hzv",
  })
  @get()
  static getHzv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hzv",
  })
  @post("{id}")
  static createHzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
