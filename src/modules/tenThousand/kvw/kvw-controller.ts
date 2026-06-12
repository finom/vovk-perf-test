import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvw")
export default class KvwController {
  @operation({
    summary: "Get Kvw",
  })
  @get()
  static getKvw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kvw",
  })
  @post("{id}")
  static createKvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
