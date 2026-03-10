import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edr")
export default class EdrController {
  @operation({
    summary: "Get Edr",
  })
  @get()
  static getEdr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Edr",
  })
  @post("{id}")
  static createEdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
