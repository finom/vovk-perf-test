import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqq")
export default class NqqController {
  @operation({
    summary: "Get Nqq",
  })
  @get()
  static getNqq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqq",
  })
  @post("{id}")
  static createNqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
