import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eex")
export default class EexController {
  @operation({
    summary: "Get Eex",
  })
  @get()
  static getEex = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eex",
  })
  @post("{id}")
  static createEex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
