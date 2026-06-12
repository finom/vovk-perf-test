import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cto")
export default class CtoController {
  @operation({
    summary: "Get Cto",
  })
  @get()
  static getCto = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cto",
  })
  @post("{id}")
  static createCto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
