import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyt")
export default class HytController {
  @operation({
    summary: "Get Hyt",
  })
  @get()
  static getHyt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyt",
  })
  @post("{id}")
  static createHyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
