import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecz")
export default class EczController {
  @operation({
    summary: "Get Ecz",
  })
  @get()
  static getEcz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ecz",
  })
  @post("{id}")
  static createEcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
