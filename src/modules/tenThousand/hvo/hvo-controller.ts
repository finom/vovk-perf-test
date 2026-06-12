import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvo")
export default class HvoController {
  @operation({
    summary: "Get Hvo",
  })
  @get()
  static getHvo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvo",
  })
  @post("{id}")
  static createHvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
