import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wu")
export default class WuController {
  @operation({
    summary: "Get Wu",
  })
  @get()
  static getWu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Wu",
  })
  @post("{id}")
  static createWu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
