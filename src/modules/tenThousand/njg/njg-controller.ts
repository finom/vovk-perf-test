import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njg")
export default class NjgController {
  @operation({
    summary: "Get Njg",
  })
  @get()
  static getNjg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njg",
  })
  @post("{id}")
  static createNjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
