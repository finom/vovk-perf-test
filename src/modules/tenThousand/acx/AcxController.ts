import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acx")
export default class AcxController {
  @operation({
    summary: "Get Acx",
  })
  @get()
  static getAcx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Acx",
  })
  @post("{id}")
  static createAcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
