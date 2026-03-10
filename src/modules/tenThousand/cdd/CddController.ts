import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdd")
export default class CddController {
  @operation({
    summary: "Get Cdd",
  })
  @get()
  static getCdd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cdd",
  })
  @post("{id}")
  static createCdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
