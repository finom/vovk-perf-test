import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nd")
export default class NdController {
  @operation({
    summary: "Get Nd",
  })
  @get()
  static getNd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nd",
  })
  @post("{id}")
  static createNd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
