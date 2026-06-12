import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eeh")
export default class EehController {
  @operation({
    summary: "Get Eeh",
  })
  @get()
  static getEeh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eeh",
  })
  @post("{id}")
  static createEeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
