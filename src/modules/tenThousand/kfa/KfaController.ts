import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfa")
export default class KfaController {
  @operation({
    summary: "Get Kfa",
  })
  @get()
  static getKfa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kfa",
  })
  @post("{id}")
  static createKfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
