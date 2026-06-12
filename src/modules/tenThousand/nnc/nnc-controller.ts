import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnc")
export default class NncController {
  @operation({
    summary: "Get Nnc",
  })
  @get()
  static getNnc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nnc",
  })
  @post("{id}")
  static createNnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
