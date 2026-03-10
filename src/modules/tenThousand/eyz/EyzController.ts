import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyz")
export default class EyzController {
  @operation({
    summary: "Get Eyz",
  })
  @get()
  static getEyz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyz",
  })
  @post("{id}")
  static createEyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
