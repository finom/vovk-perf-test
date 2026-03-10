import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgs")
export default class CgsController {
  @operation({
    summary: "Get Cgs",
  })
  @get()
  static getCgs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cgs",
  })
  @post("{id}")
  static createCgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
