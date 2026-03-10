import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmc")
export default class FmcController {
  @operation({
    summary: "Get Fmc",
  })
  @get()
  static getFmc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmc",
  })
  @post("{id}")
  static createFmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
