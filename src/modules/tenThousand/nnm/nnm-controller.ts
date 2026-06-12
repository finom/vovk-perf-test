import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnm")
export default class NnmController {
  @operation({
    summary: "Get Nnm",
  })
  @get()
  static getNnm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nnm",
  })
  @post("{id}")
  static createNnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
