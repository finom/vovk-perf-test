import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cad")
export default class CadController {
  @operation({
    summary: "Get Cad",
  })
  @get()
  static getCad = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cad",
  })
  @post("{id}")
  static createCad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
