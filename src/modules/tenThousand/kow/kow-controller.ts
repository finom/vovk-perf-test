import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kow")
export default class KowController {
  @operation({
    summary: "Get Kow",
  })
  @get()
  static getKow = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kow",
  })
  @post("{id}")
  static createKow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
