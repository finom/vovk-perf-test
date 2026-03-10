import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jui")
export default class JuiController {
  @operation({
    summary: "Get Jui",
  })
  @get()
  static getJui = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jui",
  })
  @post("{id}")
  static createJui = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
