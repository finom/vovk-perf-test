import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("i")
export default class IController {
  @operation({
    summary: "Get I",
  })
  @get()
  static getI = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create I",
  })
  @post("{id}")
  static createI = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
