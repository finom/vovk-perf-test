import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkc")
export default class HkcController {
  @operation({
    summary: "Get Hkc",
  })
  @get()
  static getHkc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkc",
  })
  @post("{id}")
  static createHkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
