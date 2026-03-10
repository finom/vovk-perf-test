import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eaq")
export default class EaqController {
  @operation({
    summary: "Get Eaq",
  })
  @get()
  static getEaq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eaq",
  })
  @post("{id}")
  static createEaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
