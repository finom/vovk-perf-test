import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cca")
export default class CcaController {
  @operation({
    summary: "Get Cca",
  })
  @get()
  static getCca = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cca",
  })
  @post("{id}")
  static createCca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
