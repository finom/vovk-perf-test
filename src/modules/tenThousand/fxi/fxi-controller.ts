import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxi")
export default class FxiController {
  @operation({
    summary: "Get Fxi",
  })
  @get()
  static getFxi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fxi",
  })
  @post("{id}")
  static createFxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
