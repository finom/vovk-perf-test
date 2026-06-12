import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jes")
export default class JesController {
  @operation({
    summary: "Get Jes",
  })
  @get()
  static getJes = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jes",
  })
  @post("{id}")
  static createJes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
