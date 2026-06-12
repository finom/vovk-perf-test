import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arl")
export default class ArlController {
  @operation({
    summary: "Get Arl",
  })
  @get()
  static getArl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Arl",
  })
  @post("{id}")
  static createArl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
