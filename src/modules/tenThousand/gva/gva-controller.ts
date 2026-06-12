import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gva")
export default class GvaController {
  @operation({
    summary: "Get Gva",
  })
  @get()
  static getGva = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gva",
  })
  @post("{id}")
  static createGva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
