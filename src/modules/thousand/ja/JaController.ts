import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ja")
export default class JaController {
  @operation({
    summary: "Get Ja",
  })
  @get()
  static getJa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ja",
  })
  @post("{id}")
  static createJa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
