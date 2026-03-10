import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilm")
export default class IlmController {
  @operation({
    summary: "Get Ilm",
  })
  @get()
  static getIlm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ilm",
  })
  @post("{id}")
  static createIlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
