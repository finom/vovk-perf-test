import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpg")
export default class CpgController {
  @operation({
    summary: "Get Cpg",
  })
  @get()
  static getCpg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpg",
  })
  @post("{id}")
  static createCpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
