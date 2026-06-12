import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnw")
export default class NnwController {
  @operation({
    summary: "Get Nnw",
  })
  @get()
  static getNnw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nnw",
  })
  @post("{id}")
  static createNnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
