import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccx")
export default class CcxController {
  @operation({
    summary: "Get Ccx",
  })
  @get()
  static getCcx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ccx",
  })
  @post("{id}")
  static createCcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
