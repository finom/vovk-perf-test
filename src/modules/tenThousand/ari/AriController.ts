import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ari")
export default class AriController {
  @operation({
    summary: "Get Ari",
  })
  @get()
  static getAri = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ari",
  })
  @post("{id}")
  static createAri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
