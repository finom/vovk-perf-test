import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eio")
export default class EioController {
  @operation({
    summary: "Get Eio",
  })
  @get()
  static getEio = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eio",
  })
  @post("{id}")
  static createEio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
