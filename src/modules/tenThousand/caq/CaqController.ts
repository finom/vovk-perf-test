import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("caq")
export default class CaqController {
  @operation({
    summary: "Get Caq",
  })
  @get()
  static getCaq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Caq",
  })
  @post("{id}")
  static createCaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
