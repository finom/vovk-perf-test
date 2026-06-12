import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fea")
export default class FeaController {
  @operation({
    summary: "Get Fea",
  })
  @get()
  static getFea = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fea",
  })
  @post("{id}")
  static createFea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
