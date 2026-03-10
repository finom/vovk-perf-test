import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxu")
export default class CxuController {
  @operation({
    summary: "Get Cxu",
  })
  @get()
  static getCxu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxu",
  })
  @post("{id}")
  static createCxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
