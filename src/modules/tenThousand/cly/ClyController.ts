import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cly")
export default class ClyController {
  @operation({
    summary: "Get Cly",
  })
  @get()
  static getCly = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cly",
  })
  @post("{id}")
  static createCly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
