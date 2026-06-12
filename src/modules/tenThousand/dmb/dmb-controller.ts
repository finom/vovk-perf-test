import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmb")
export default class DmbController {
  @operation({
    summary: "Get Dmb",
  })
  @get()
  static getDmb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmb",
  })
  @post("{id}")
  static createDmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
