import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkz")
export default class HkzController {
  @operation({
    summary: "Get Hkz",
  })
  @get()
  static getHkz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkz",
  })
  @post("{id}")
  static createHkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
