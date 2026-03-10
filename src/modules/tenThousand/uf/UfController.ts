import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uf")
export default class UfController {
  @operation({
    summary: "Get Uf",
  })
  @get()
  static getUf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Uf",
  })
  @post("{id}")
  static createUf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
