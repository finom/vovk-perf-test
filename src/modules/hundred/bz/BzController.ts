import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bz")
export default class BzController {
  @operation({
    summary: "Get Bz",
  })
  @get()
  static getBz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bz",
  })
  @post("{id}")
  static createBz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
