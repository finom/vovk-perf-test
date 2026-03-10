import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsp")
export default class HspController {
  @operation({
    summary: "Get Hsp",
  })
  @get()
  static getHsp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hsp",
  })
  @post("{id}")
  static createHsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
