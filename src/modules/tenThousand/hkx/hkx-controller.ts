import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkx")
export default class HkxController {
  @operation({
    summary: "Get Hkx",
  })
  @get()
  static getHkx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkx",
  })
  @post("{id}")
  static createHkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
