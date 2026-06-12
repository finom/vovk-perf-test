import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cui")
export default class CuiController {
  @operation({
    summary: "Get Cui",
  })
  @get()
  static getCui = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cui",
  })
  @post("{id}")
  static createCui = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
