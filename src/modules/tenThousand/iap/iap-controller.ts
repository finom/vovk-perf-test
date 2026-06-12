import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iap")
export default class IapController {
  @operation({
    summary: "Get Iap",
  })
  @get()
  static getIap = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iap",
  })
  @post("{id}")
  static createIap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
