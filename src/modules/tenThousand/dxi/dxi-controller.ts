import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxi")
export default class DxiController {
  @operation({
    summary: "Get Dxi",
  })
  @get()
  static getDxi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxi",
  })
  @post("{id}")
  static createDxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
