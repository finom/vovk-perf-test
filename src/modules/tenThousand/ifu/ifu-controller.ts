import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifu")
export default class IfuController {
  @operation({
    summary: "Get Ifu",
  })
  @get()
  static getIfu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ifu",
  })
  @post("{id}")
  static createIfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
