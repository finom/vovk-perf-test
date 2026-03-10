import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyt")
export default class EytController {
  @operation({
    summary: "Get Eyt",
  })
  @get()
  static getEyt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyt",
  })
  @post("{id}")
  static createEyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
