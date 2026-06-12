import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abl")
export default class AblController {
  @operation({
    summary: "Get Abl",
  })
  @get()
  static getAbl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Abl",
  })
  @post("{id}")
  static createAbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
