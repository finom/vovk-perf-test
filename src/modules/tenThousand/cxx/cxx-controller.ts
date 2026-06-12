import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxx")
export default class CxxController {
  @operation({
    summary: "Get Cxx",
  })
  @get()
  static getCxx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxx",
  })
  @post("{id}")
  static createCxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
