import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewa")
export default class EwaController {
  @operation({
    summary: "Get Ewa",
  })
  @get()
  static getEwa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewa",
  })
  @post("{id}")
  static createEwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
