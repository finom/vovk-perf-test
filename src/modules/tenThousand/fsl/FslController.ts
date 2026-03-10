import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsl")
export default class FslController {
  @operation({
    summary: "Get Fsl",
  })
  @get()
  static getFsl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsl",
  })
  @post("{id}")
  static createFsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
