import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxn")
export default class CxnController {
  @operation({
    summary: "Get Cxn",
  })
  @get()
  static getCxn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxn",
  })
  @post("{id}")
  static createCxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
