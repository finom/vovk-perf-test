import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifn")
export default class IfnController {
  @operation({
    summary: "Get Ifn",
  })
  @get()
  static getIfn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ifn",
  })
  @post("{id}")
  static createIfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
