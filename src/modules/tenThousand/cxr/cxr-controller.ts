import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxr")
export default class CxrController {
  @operation({
    summary: "Get Cxr",
  })
  @get()
  static getCxr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxr",
  })
  @post("{id}")
  static createCxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
