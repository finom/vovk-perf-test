import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksf")
export default class KsfController {
  @operation({
    summary: "Get Ksf",
  })
  @get()
  static getKsf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksf",
  })
  @post("{id}")
  static createKsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
