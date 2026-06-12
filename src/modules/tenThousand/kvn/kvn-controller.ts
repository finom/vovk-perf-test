import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvn")
export default class KvnController {
  @operation({
    summary: "Get Kvn",
  })
  @get()
  static getKvn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kvn",
  })
  @post("{id}")
  static createKvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
