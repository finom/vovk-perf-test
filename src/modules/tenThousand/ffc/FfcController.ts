import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffc")
export default class FfcController {
  @operation({
    summary: "Get Ffc",
  })
  @get()
  static getFfc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffc",
  })
  @post("{id}")
  static createFfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
