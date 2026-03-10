import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efo")
export default class EfoController {
  @operation({
    summary: "Get Efo",
  })
  @get()
  static getEfo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efo",
  })
  @post("{id}")
  static createEfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
