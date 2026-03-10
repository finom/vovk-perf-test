import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxa")
export default class CxaController {
  @operation({
    summary: "Get Cxa",
  })
  @get()
  static getCxa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxa",
  })
  @post("{id}")
  static createCxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
