import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efy")
export default class EfyController {
  @operation({
    summary: "Get Efy",
  })
  @get()
  static getEfy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efy",
  })
  @post("{id}")
  static createEfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
