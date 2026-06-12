import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvs")
export default class KvsController {
  @operation({
    summary: "Get Kvs",
  })
  @get()
  static getKvs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kvs",
  })
  @post("{id}")
  static createKvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
