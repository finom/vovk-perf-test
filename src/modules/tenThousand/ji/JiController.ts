import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ji")
export default class JiController {
  @operation({
    summary: "Get Ji",
  })
  @get()
  static getJi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ji",
  })
  @post("{id}")
  static createJi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
