import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvb")
export default class KvbController {
  @operation({
    summary: "Get Kvb",
  })
  @get()
  static getKvb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kvb",
  })
  @post("{id}")
  static createKvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
