import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxj")
export default class CxjController {
  @operation({
    summary: "Get Cxj",
  })
  @get()
  static getCxj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxj",
  })
  @post("{id}")
  static createCxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
