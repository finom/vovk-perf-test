import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyp")
export default class JypController {
  @operation({
    summary: "Get Jyp",
  })
  @get()
  static getJyp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyp",
  })
  @post("{id}")
  static createJyp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
