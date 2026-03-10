import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddx")
export default class DdxController {
  @operation({
    summary: "Get Ddx",
  })
  @get()
  static getDdx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ddx",
  })
  @post("{id}")
  static createDdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
