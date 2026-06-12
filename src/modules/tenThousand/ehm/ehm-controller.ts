import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehm")
export default class EhmController {
  @operation({
    summary: "Get Ehm",
  })
  @get()
  static getEhm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ehm",
  })
  @post("{id}")
  static createEhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
