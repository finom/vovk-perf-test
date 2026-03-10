import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eoa")
export default class EoaController {
  @operation({
    summary: "Get Eoa",
  })
  @get()
  static getEoa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eoa",
  })
  @post("{id}")
  static createEoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
