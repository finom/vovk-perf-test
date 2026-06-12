import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnm")
export default class BnmController {
  @operation({
    summary: "Get Bnm",
  })
  @get()
  static getBnm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bnm",
  })
  @post("{id}")
  static createBnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
