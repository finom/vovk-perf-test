import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erd")
export default class ErdController {
  @operation({
    summary: "Get Erd",
  })
  @get()
  static getErd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erd",
  })
  @post("{id}")
  static createErd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
