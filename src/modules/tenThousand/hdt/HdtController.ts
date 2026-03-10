import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdt")
export default class HdtController {
  @operation({
    summary: "Get Hdt",
  })
  @get()
  static getHdt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdt",
  })
  @post("{id}")
  static createHdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
