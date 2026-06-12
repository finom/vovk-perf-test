import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jis")
export default class JisController {
  @operation({
    summary: "Get Jis",
  })
  @get()
  static getJis = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jis",
  })
  @post("{id}")
  static createJis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
