import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edj")
export default class EdjController {
  @operation({
    summary: "Get Edj",
  })
  @get()
  static getEdj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Edj",
  })
  @post("{id}")
  static createEdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
