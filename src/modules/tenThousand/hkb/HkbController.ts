import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkb")
export default class HkbController {
  @operation({
    summary: "Get Hkb",
  })
  @get()
  static getHkb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkb",
  })
  @post("{id}")
  static createHkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
