import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("coa")
export default class CoaController {
  @operation({
    summary: "Get Coa",
  })
  @get()
  static getCoa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Coa",
  })
  @post("{id}")
  static createCoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
