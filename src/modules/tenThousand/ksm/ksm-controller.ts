import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksm")
export default class KsmController {
  @operation({
    summary: "Get Ksm",
  })
  @get()
  static getKsm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksm",
  })
  @post("{id}")
  static createKsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
