import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyk")
export default class CykController {
  @operation({
    summary: "Get Cyk",
  })
  @get()
  static getCyk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cyk",
  })
  @post("{id}")
  static createCyk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
