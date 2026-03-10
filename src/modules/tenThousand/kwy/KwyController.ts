import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwy")
export default class KwyController {
  @operation({
    summary: "Get Kwy",
  })
  @get()
  static getKwy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kwy",
  })
  @post("{id}")
  static createKwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
