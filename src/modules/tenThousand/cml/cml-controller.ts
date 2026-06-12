import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cml")
export default class CmlController {
  @operation({
    summary: "Get Cml",
  })
  @get()
  static getCml = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cml",
  })
  @post("{id}")
  static createCml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
