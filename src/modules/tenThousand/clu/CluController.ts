import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clu")
export default class CluController {
  @operation({
    summary: "Get Clu",
  })
  @get()
  static getClu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Clu",
  })
  @post("{id}")
  static createClu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
