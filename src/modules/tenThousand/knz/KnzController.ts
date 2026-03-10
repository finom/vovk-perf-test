import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knz")
export default class KnzController {
  @operation({
    summary: "Get Knz",
  })
  @get()
  static getKnz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Knz",
  })
  @post("{id}")
  static createKnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
