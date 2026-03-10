import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvd")
export default class KvdController {
  @operation({
    summary: "Get Kvd",
  })
  @get()
  static getKvd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kvd",
  })
  @post("{id}")
  static createKvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
