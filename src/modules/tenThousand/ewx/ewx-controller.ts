import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewx")
export default class EwxController {
  @operation({
    summary: "Get Ewx",
  })
  @get()
  static getEwx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewx",
  })
  @post("{id}")
  static createEwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
