import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eek")
export default class EekController {
  @operation({
    summary: "Get Eek",
  })
  @get()
  static getEek = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eek",
  })
  @post("{id}")
  static createEek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
