import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mje")
export default class MjeController {
  @operation({
    summary: "Get Mje",
  })
  @get()
  static getMje = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mje",
  })
  @post("{id}")
  static createMje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
