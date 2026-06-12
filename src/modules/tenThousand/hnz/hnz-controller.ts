import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnz")
export default class HnzController {
  @operation({
    summary: "Get Hnz",
  })
  @get()
  static getHnz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hnz",
  })
  @post("{id}")
  static createHnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
