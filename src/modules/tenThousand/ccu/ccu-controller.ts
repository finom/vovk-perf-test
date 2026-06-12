import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccu")
export default class CcuController {
  @operation({
    summary: "Get Ccu",
  })
  @get()
  static getCcu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ccu",
  })
  @post("{id}")
  static createCcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
