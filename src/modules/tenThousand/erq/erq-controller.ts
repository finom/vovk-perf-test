import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erq")
export default class ErqController {
  @operation({
    summary: "Get Erq",
  })
  @get()
  static getErq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erq",
  })
  @post("{id}")
  static createErq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
