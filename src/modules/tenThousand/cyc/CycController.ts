import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyc")
export default class CycController {
  @operation({
    summary: "Get Cyc",
  })
  @get()
  static getCyc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cyc",
  })
  @post("{id}")
  static createCyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
