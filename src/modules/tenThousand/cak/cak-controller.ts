import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cak")
export default class CakController {
  @operation({
    summary: "Get Cak",
  })
  @get()
  static getCak = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cak",
  })
  @post("{id}")
  static createCak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
