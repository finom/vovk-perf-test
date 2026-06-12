import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpb")
export default class CpbController {
  @operation({
    summary: "Get Cpb",
  })
  @get()
  static getCpb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpb",
  })
  @post("{id}")
  static createCpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
