import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dz")
export default class DzController {
  @operation({
    summary: "Get Dz",
  })
  @get()
  static getDz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dz",
  })
  @post("{id}")
  static createDz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
