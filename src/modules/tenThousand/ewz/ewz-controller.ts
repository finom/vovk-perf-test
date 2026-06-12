import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewz")
export default class EwzController {
  @operation({
    summary: "Get Ewz",
  })
  @get()
  static getEwz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewz",
  })
  @post("{id}")
  static createEwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
