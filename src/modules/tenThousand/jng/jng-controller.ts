import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jng")
export default class JngController {
  @operation({
    summary: "Get Jng",
  })
  @get()
  static getJng = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jng",
  })
  @post("{id}")
  static createJng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
