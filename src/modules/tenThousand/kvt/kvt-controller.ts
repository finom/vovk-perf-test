import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvt")
export default class KvtController {
  @operation({
    summary: "Get Kvt",
  })
  @get()
  static getKvt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kvt",
  })
  @post("{id}")
  static createKvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
