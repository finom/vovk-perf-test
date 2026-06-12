import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksq")
export default class KsqController {
  @operation({
    summary: "Get Ksq",
  })
  @get()
  static getKsq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksq",
  })
  @post("{id}")
  static createKsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
