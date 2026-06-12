import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eva")
export default class EvaController {
  @operation({
    summary: "Get Eva",
  })
  @get()
  static getEva = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eva",
  })
  @post("{id}")
  static createEva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
