import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebv")
export default class EbvController {
  @operation({
    summary: "Get Ebv",
  })
  @get()
  static getEbv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ebv",
  })
  @post("{id}")
  static createEbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
