import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esc")
export default class EscController {
  @operation({
    summary: "Get Esc",
  })
  @get()
  static getEsc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esc",
  })
  @post("{id}")
  static createEsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
