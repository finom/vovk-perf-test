import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apl")
export default class AplController {
  @operation({
    summary: "Get Apl",
  })
  @get()
  static getApl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Apl",
  })
  @post("{id}")
  static createApl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
