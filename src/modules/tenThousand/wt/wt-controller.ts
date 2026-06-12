import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wt")
export default class WtController {
  @operation({
    summary: "Get Wt",
  })
  @get()
  static getWt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Wt",
  })
  @post("{id}")
  static createWt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
