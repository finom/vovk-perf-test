import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gw")
export default class GwController {
  @operation({
    summary: "Get Gw",
  })
  @get()
  static getGw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gw",
  })
  @post("{id}")
  static createGw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
