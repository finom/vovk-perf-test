import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eos")
export default class EosController {
  @operation({
    summary: "Get Eos",
  })
  @get()
  static getEos = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eos",
  })
  @post("{id}")
  static createEos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
