import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ht")
export default class HtController {
  @operation({
    summary: "Get Ht",
  })
  @get()
  static getHt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ht",
  })
  @post("{id}")
  static createHt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
