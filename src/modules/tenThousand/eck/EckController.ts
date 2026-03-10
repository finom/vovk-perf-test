import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eck")
export default class EckController {
  @operation({
    summary: "Get Eck",
  })
  @get()
  static getEck = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eck",
  })
  @post("{id}")
  static createEck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
