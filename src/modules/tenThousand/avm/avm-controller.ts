import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avm")
export default class AvmController {
  @operation({
    summary: "Get Avm",
  })
  @get()
  static getAvm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Avm",
  })
  @post("{id}")
  static createAvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
