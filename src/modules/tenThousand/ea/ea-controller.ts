import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ea")
export default class EaController {
  @operation({
    summary: "Get Ea",
  })
  @get()
  static getEa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ea",
  })
  @post("{id}")
  static createEa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
