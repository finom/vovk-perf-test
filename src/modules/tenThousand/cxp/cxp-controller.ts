import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxp")
export default class CxpController {
  @operation({
    summary: "Get Cxp",
  })
  @get()
  static getCxp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxp",
  })
  @post("{id}")
  static createCxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
