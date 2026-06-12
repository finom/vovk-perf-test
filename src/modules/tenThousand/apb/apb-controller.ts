import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apb")
export default class ApbController {
  @operation({
    summary: "Get Apb",
  })
  @get()
  static getApb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Apb",
  })
  @post("{id}")
  static createApb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
