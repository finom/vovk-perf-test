import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfq")
export default class KfqController {
  @operation({
    summary: "Get Kfq",
  })
  @get()
  static getKfq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kfq",
  })
  @post("{id}")
  static createKfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
