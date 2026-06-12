import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dce")
export default class DceController {
  @operation({
    summary: "Get Dce",
  })
  @get()
  static getDce = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dce",
  })
  @post("{id}")
  static createDce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
