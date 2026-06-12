import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eui")
export default class EuiController {
  @operation({
    summary: "Get Eui",
  })
  @get()
  static getEui = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eui",
  })
  @post("{id}")
  static createEui = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
