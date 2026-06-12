import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvg")
export default class FvgController {
  @operation({
    summary: "Get Fvg",
  })
  @get()
  static getFvg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fvg",
  })
  @post("{id}")
  static createFvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
