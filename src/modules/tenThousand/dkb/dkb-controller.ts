import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkb")
export default class DkbController {
  @operation({
    summary: "Get Dkb",
  })
  @get()
  static getDkb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dkb",
  })
  @post("{id}")
  static createDkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
