import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayt")
export default class AytController {
  @operation({
    summary: "Get Ayt",
  })
  @get()
  static getAyt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ayt",
  })
  @post("{id}")
  static createAyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
