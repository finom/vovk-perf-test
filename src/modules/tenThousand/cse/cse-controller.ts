import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cse")
export default class CseController {
  @operation({
    summary: "Get Cse",
  })
  @get()
  static getCse = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cse",
  })
  @post("{id}")
  static createCse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
