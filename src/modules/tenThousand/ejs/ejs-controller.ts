import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejs")
export default class EjsController {
  @operation({
    summary: "Get Ejs",
  })
  @get()
  static getEjs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ejs",
  })
  @post("{id}")
  static createEjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
