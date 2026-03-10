import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxb")
export default class CxbController {
  @operation({
    summary: "Get Cxb",
  })
  @get()
  static getCxb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxb",
  })
  @post("{id}")
  static createCxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
