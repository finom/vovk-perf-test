import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gei")
export default class GeiController {
  @operation({
    summary: "Get Gei",
  })
  @get()
  static getGei = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gei",
  })
  @post("{id}")
  static createGei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
