import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ery")
export default class EryController {
  @operation({
    summary: "Get Ery",
  })
  @get()
  static getEry = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ery",
  })
  @post("{id}")
  static createEry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
