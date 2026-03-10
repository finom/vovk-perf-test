import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmu")
export default class FmuController {
  @operation({
    summary: "Get Fmu",
  })
  @get()
  static getFmu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmu",
  })
  @post("{id}")
  static createFmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
