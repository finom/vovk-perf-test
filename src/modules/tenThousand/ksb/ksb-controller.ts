import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksb")
export default class KsbController {
  @operation({
    summary: "Get Ksb",
  })
  @get()
  static getKsb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksb",
  })
  @post("{id}")
  static createKsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
