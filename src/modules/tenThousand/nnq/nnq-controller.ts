import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnq")
export default class NnqController {
  @operation({
    summary: "Get Nnq",
  })
  @get()
  static getNnq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nnq",
  })
  @post("{id}")
  static createNnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
