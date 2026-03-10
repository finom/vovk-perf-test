import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpz")
export default class CpzController {
  @operation({
    summary: "Get Cpz",
  })
  @get()
  static getCpz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpz",
  })
  @post("{id}")
  static createCpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
