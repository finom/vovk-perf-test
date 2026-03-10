import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njz")
export default class NjzController {
  @operation({
    summary: "Get Njz",
  })
  @get()
  static getNjz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njz",
  })
  @post("{id}")
  static createNjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
