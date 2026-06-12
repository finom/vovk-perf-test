import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfa")
export default class CfaController {
  @operation({
    summary: "Get Cfa",
  })
  @get()
  static getCfa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfa",
  })
  @post("{id}")
  static createCfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
