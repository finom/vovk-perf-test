import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huy")
export default class HuyController {
  @operation({
    summary: "Get Huy",
  })
  @get()
  static getHuy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Huy",
  })
  @post("{id}")
  static createHuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
