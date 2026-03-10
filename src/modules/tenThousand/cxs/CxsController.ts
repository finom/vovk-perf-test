import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxs")
export default class CxsController {
  @operation({
    summary: "Get Cxs",
  })
  @get()
  static getCxs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxs",
  })
  @post("{id}")
  static createCxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
