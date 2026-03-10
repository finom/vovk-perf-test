import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eow")
export default class EowController {
  @operation({
    summary: "Get Eow",
  })
  @get()
  static getEow = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eow",
  })
  @post("{id}")
  static createEow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
