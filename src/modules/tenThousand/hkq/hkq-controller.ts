import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkq")
export default class HkqController {
  @operation({
    summary: "Get Hkq",
  })
  @get()
  static getHkq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkq",
  })
  @post("{id}")
  static createHkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
