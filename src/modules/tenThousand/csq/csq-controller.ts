import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csq")
export default class CsqController {
  @operation({
    summary: "Get Csq",
  })
  @get()
  static getCsq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Csq",
  })
  @post("{id}")
  static createCsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
