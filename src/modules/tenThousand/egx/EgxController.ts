import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egx")
export default class EgxController {
  @operation({
    summary: "Get Egx",
  })
  @get()
  static getEgx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egx",
  })
  @post("{id}")
  static createEgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
