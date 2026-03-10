import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvl")
export default class KvlController {
  @operation({
    summary: "Get Kvl",
  })
  @get()
  static getKvl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kvl",
  })
  @post("{id}")
  static createKvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
