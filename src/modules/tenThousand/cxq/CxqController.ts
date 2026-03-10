import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxq")
export default class CxqController {
  @operation({
    summary: "Get Cxq",
  })
  @get()
  static getCxq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxq",
  })
  @post("{id}")
  static createCxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
