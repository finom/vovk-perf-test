import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksw")
export default class KswController {
  @operation({
    summary: "Get Ksw",
  })
  @get()
  static getKsw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksw",
  })
  @post("{id}")
  static createKsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
