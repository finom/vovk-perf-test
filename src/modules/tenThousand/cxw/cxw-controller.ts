import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxw")
export default class CxwController {
  @operation({
    summary: "Get Cxw",
  })
  @get()
  static getCxw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxw",
  })
  @post("{id}")
  static createCxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
