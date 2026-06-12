import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kie")
export default class KieController {
  @operation({
    summary: "Get Kie",
  })
  @get()
  static getKie = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kie",
  })
  @post("{id}")
  static createKie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
