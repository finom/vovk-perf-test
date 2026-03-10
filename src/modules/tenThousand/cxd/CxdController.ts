import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxd")
export default class CxdController {
  @operation({
    summary: "Get Cxd",
  })
  @get()
  static getCxd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxd",
  })
  @post("{id}")
  static createCxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
