import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qi")
export default class QiController {
  @operation({
    summary: "Get Qi",
  })
  @get()
  static getQi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qi",
  })
  @post("{id}")
  static createQi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
