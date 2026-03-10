import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("so")
export default class SoController {
  @operation({
    summary: "Get So",
  })
  @get()
  static getSo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create So",
  })
  @post("{id}")
  static createSo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
