import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkh")
export default class HkhController {
  @operation({
    summary: "Get Hkh",
  })
  @get()
  static getHkh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hkh",
  })
  @post("{id}")
  static createHkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
