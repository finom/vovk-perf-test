import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncu")
export default class NcuController {
  @operation({
    summary: "Get Ncu",
  })
  @get()
  static getNcu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ncu",
  })
  @post("{id}")
  static createNcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
