import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ate")
export default class AteController {
  @operation({
    summary: "Get Ate",
  })
  @get()
  static getAte = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ate",
  })
  @post("{id}")
  static createAte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
