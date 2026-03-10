import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkm")
export default class HkmController {
  @operation({
    summary: "Get Hkm",
  })
  @get()
  static getHkm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkm",
  })
  @post("{id}")
  static createHkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
