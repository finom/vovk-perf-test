import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elt")
export default class EltController {
  @operation({
    summary: "Get Elt",
  })
  @get()
  static getElt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Elt",
  })
  @post("{id}")
  static createElt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
