import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnb")
export default class NnbController {
  @operation({
    summary: "Get Nnb",
  })
  @get()
  static getNnb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nnb",
  })
  @post("{id}")
  static createNnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
