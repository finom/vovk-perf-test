import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbt")
export default class GbtController {
  @operation({
    summary: "Get Gbt",
  })
  @get()
  static getGbt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbt",
  })
  @post("{id}")
  static createGbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
