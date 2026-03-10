import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eb")
export default class EbController {
  @operation({
    summary: "Get Eb",
  })
  @get()
  static getEb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eb",
  })
  @post("{id}")
  static createEb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
