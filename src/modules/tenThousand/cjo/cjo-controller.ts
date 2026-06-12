import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjo")
export default class CjoController {
  @operation({
    summary: "Get Cjo",
  })
  @get()
  static getCjo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjo",
  })
  @post("{id}")
  static createCjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
