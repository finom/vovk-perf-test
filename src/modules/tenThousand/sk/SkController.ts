import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sk")
export default class SkController {
  @operation({
    summary: "Get Sk",
  })
  @get()
  static getSk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Sk",
  })
  @post("{id}")
  static createSk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
