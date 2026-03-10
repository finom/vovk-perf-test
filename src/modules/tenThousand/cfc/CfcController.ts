import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfc")
export default class CfcController {
  @operation({
    summary: "Get Cfc",
  })
  @get()
  static getCfc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfc",
  })
  @post("{id}")
  static createCfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
