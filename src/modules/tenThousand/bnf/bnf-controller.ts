import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnf")
export default class BnfController {
  @operation({
    summary: "Get Bnf",
  })
  @get()
  static getBnf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bnf",
  })
  @post("{id}")
  static createBnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
