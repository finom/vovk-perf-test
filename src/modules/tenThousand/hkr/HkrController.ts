import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkr")
export default class HkrController {
  @operation({
    summary: "Get Hkr",
  })
  @get()
  static getHkr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkr",
  })
  @post("{id}")
  static createHkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
