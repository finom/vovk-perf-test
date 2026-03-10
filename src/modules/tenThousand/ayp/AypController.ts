import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayp")
export default class AypController {
  @operation({
    summary: "Get Ayp",
  })
  @get()
  static getAyp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ayp",
  })
  @post("{id}")
  static createAyp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
