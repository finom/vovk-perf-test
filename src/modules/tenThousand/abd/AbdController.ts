import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abd")
export default class AbdController {
  @operation({
    summary: "Get Abd",
  })
  @get()
  static getAbd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Abd",
  })
  @post("{id}")
  static createAbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
