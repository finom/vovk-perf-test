import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eju")
export default class EjuController {
  @operation({
    summary: "Get Eju",
  })
  @get()
  static getEju = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eju",
  })
  @post("{id}")
  static createEju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
