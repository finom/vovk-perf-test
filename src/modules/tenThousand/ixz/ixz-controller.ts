import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixz")
export default class IxzController {
  @operation({
    summary: "Get Ixz",
  })
  @get()
  static getIxz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixz",
  })
  @post("{id}")
  static createIxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
