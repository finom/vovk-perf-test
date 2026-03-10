import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmm")
export default class KmmController {
  @operation({
    summary: "Get Kmm",
  })
  @get()
  static getKmm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmm",
  })
  @post("{id}")
  static createKmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
