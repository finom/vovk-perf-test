import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqi")
export default class EqiController {
  @operation({
    summary: "Get Eqi",
  })
  @get()
  static getEqi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqi",
  })
  @post("{id}")
  static createEqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
