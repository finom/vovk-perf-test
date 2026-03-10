import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eie")
export default class EieController {
  @operation({
    summary: "Get Eie",
  })
  @get()
  static getEie = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eie",
  })
  @post("{id}")
  static createEie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
