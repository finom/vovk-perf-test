import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cku")
export default class CkuController {
  @operation({
    summary: "Get Cku",
  })
  @get()
  static getCku = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cku",
  })
  @post("{id}")
  static createCku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
