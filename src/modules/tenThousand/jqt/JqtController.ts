import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqt")
export default class JqtController {
  @operation({
    summary: "Get Jqt",
  })
  @get()
  static getJqt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqt",
  })
  @post("{id}")
  static createJqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
