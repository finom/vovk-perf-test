import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wc")
export default class WcController {
  @operation({
    summary: "Get Wc",
  })
  @get()
  static getWc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Wc",
  })
  @post("{id}")
  static createWc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
