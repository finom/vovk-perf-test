import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evy")
export default class EvyController {
  @operation({
    summary: "Get Evy",
  })
  @get()
  static getEvy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evy",
  })
  @post("{id}")
  static createEvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
