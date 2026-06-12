import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyh")
export default class JyhController {
  @operation({
    summary: "Get Jyh",
  })
  @get()
  static getJyh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyh",
  })
  @post("{id}")
  static createJyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
