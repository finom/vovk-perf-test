import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egd")
export default class EgdController {
  @operation({
    summary: "Get Egd",
  })
  @get()
  static getEgd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egd",
  })
  @post("{id}")
  static createEgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
